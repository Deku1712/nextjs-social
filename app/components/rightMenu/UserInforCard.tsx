import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserInofCardInteraction from "./UserInofCardInteraction";
import UpdateUser from "./UpdateUser";

export default async function UserInforCard({ user }: { user: User }) {
  const createAtDate = new Date(user.createdAt);
  const formatedDate = createAtDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;

  const { userId: currentUserId } = await auth();
  if (currentUserId) {
    const blockRes = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: user.id,
      },
    });
    isUserBlocked = blockRes ? true : false;
    const followingRes = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user.id,
      },
    });
    isFollowing = followingRes ? true : false;

    const followingSentRes = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user.id,
      },
    });
    isFollowingSent = followingSentRes ? true : false;
  }

  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className=" flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        {currentUserId === user.id ? (
          <UpdateUser user={user} />
        ) : (
          <Link className=" text-blue-400" href={""}>
            See All
          </Link>
        )}
      </div>
      <div className=" flex flex-col gap-4 text-gray-500">
        <div className=" flex items-center gap-2">
          <span className=" text-xl text-black">
            {user.name && user.surname
              ? user.name + " " + user.surname
              : user.username}
          </span>
          <span className=" text-sm ">@{user.username}</span>
        </div>
        {user.description && <p className="">{user.description}</p>}
        {user.city && (
          <div className=" flex items-center gap-2">
            <Image
              src="/map.png"
              alt=""
              width={16}
              height={16}
              className=" cursor-pointer"
            />
            <span className="">
              Living in <b>{user.city}</b>
            </span>
          </div>
        )}
        {user.school && (
          <div className=" flex items-center gap-2">
            <Image
              src="/school.png"
              alt=""
              width={16}
              height={16}
              className=" cursor-pointer"
            />
            <span className="">
              Went to <b>{user.school}</b>
            </span>
          </div>
        )}
        {user.work && (
          <div className=" flex items-center gap-2">
            <Image
              src="/work.png"
              alt=""
              width={16}
              height={16}
              className=" cursor-pointer"
            />
            <span className="">
              Work at <b>{user.work}</b>
            </span>
          </div>
        )}
        <div className=" flex justify-between items-center">
          {user.website && (
            <div className=" flex items-center gap-2">
              <Image
                src={"/link.png"}
                alt=""
                width={16}
                height={16}
                className=" cursor-pointer"
              />
              <span className=" font-semibold text-blue-500">
                {user.website}
              </span>
            </div>
          )}
          <div className=" flex items-center gap-2">
            <Image
              src={"/date.png"}
              alt=""
              width={16}
              height={16}
              className=" cursor-pointer"
            />
            <span className="">{formatedDate}</span>
          </div>
        </div>
        <UserInofCardInteraction
          userId={user.id}
          currentUserId={currentUserId}
          isUserBlocked={isUserBlocked}
          isFollowing={isFollowing}
          isFollowingSent={isFollowingSent}
        />
      </div>
    </div>
  );
}
