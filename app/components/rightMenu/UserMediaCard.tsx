import prisma from "@/lib/client";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function UserMediaCard({ user }: { user: User }) {
  const postWithMedia = await prisma.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className=" flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link className=" text-blue-400" href={""}>
          See All
        </Link>
      </div>
      <div className=" flex gap-4 justify-start flex-wrap">
        {postWithMedia.length ? (
          postWithMedia.map((post) => (
            <div key={post.id} className=" relative w-1/5 h-24">
              <Image
                src={post.img || ""}
                alt=""
                fill
                className=" object-cover rounded-md"
              />
            </div>
          ))
        ) : (
          <span>No Media Found</span>
        )}
      </div>
    </div>
  );
}