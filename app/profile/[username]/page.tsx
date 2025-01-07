import Feed from "@/app/components/feed/Feed";
import LeftMenu from "@/app/components/leftMenu/LeftMenu";
import RightMenu from "@/app/components/rightMenu/RightMenu";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";

import React from "react";

export async function generateStaticParams() {
  return await prisma.user.findMany({
    select: {
      username: true,
    },
  });
}

export default async function Profile(props: {
  params: Promise<{
    username: string;
  }>;
}) {
  const username = decodeURIComponent((await props.params).username);
  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });
  if (!user) return notFound();

  let isBlocked;

  const { userId: curentUserId } = await auth();

  if (curentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: curentUserId,
      },
    });
    if (res) isBlocked = true;
  } else {
    isBlocked = false;
  }
  if (isBlocked) return notFound();

  return (
    <div className=" pt-6 flex gap-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className=" w-full lg:w-[70%] xl:w-[50%]">
        <div className=" flex flex-col gap-6">
          <div className=" flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src={user.cover || "/noAvatar.png"}
                alt=""
                fill
                className=" object-cover rounded-md"
              />
              <Image
                src={user.avatar || "/noAvatar.png"}
                alt=""
                width={128}
                height={128}
                className=" w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 object-cover rounded-full ring-2 ring-white"
              />
            </div>
            <h1 className=" mt-20 mb-4 text-2xl font-medium">
              {user.name && user.surname
                ? user.name + " " + user.surname
                : user.username}
            </h1>
            <div className=" flex items-center justify-center gap-12 mb-4">
              <div className=" flex flex-col items-center ">
                <span className=" font-semibold">
                  {user._count?.posts || 0}
                </span>
                <span className=" text-sm">Posts</span>
              </div>
              <div className=" flex flex-col items-center ">
                <span className=" font-semibold">{user._count.followers}</span>
                <span className=" text-sm">Followers</span>
              </div>
              <div className=" flex flex-col items-center ">
                <span className=" font-semibold">{user._count.followings}</span>
                <span className=" text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu user={user} />
      </div>
    </div>
  );
}
