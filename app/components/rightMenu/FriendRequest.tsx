import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import FriendRequestList from "./FriendRequestList";

export default async function FriendRequest() {
  const { userId } = await auth();

  if (!userId) return null;

  const request = await prisma.followRequest.findMany({
    where: {
      receiverId: userId,
    },
    include: {
      sender: true,
    },
  });

  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className=" flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link className=" text-blue-400" href={""}>
          See All
        </Link>
      </div>
      <FriendRequestList request={request} />
    </div>
  );
}
