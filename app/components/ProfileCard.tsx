import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

export default async function ProfileCard() {
  const { userId } = await auth();

  if (!userId) return null;
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });
  if (!user) return null;
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm text-sm flex flex-col gap-6">
      <div className=" h-20 relative">
        <Image
          src={user.avatar || "/noAvatar.png"}
          alt=""
          fill
          className=" rounded-md object-cover"
        />
        <Image
          src={user.avatar || "/noAvatar.png"}
          alt=""
          width={48}
          height={48}
          className=" rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className=" h-20 flex flex-col gap-2 items-center">
        <span className=" font-semibold">
          {user.name && user.surname
            ? user.name + " " + user.surname
            : user.username}
        </span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src={
                "https://images.pexels.com/photos/29904630/pexels-photo-29904630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt=""
              width={12}
              height={12}
              className=" rounded-full object-cover w-3 h-3 ring-1 ring-white z-10"
            />
            <Image
              src={
                "https://images.pexels.com/photos/29904630/pexels-photo-29904630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt=""
              width={12}
              height={12}
              className=" rounded-full object-cover w-3 h-3 ring-1 ring-white z-10"
            />
            <Image
              src={
                "https://images.pexels.com/photos/29904630/pexels-photo-29904630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt=""
              width={12}
              height={12}
              className=" rounded-full object-cover w-3 h-3 ring-1 ring-white z-10"
            />
            <Image
              src={
                "https://images.pexels.com/photos/29904630/pexels-photo-29904630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt=""
              width={12}
              height={12}
              className=" rounded-full object-cover w-3 h-3 ring-1 ring-white z-10"
            />
          </div>
          <span className=" text-xs text-gray-500"> 500 Followers</span>
        </div>
        <button className=" p-2 text-xs text-white bg-blue-500 rounded-lg">
          My Profile
        </button>
      </div>
    </div>
  );
}
