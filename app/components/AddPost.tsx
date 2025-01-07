import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

export default async function AddPost() {
  const { userId } = await auth();
  console.log(userId);

  const testAction = async (form: FormData) => {
    "use server";
    if (!userId) {
      throw new Error("User is not authenticated");
    }
    const desc = form.get("desc");
    try {
      await prisma.post.create({
        data: {
          userId: userId,
          desc: desc as string,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" p-4 bg-white rounded-lg flex gap-4 justify-between text-sm shadow-md">
      {/* Avatar */}
      <Image
        width={48}
        height={48}
        src={
          "https://images.pexels.com/photos/29990907/pexels-photo-29990907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        alt=""
        className=" w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1">
        {/* Text Input */}
        <form action={testAction} className=" flex gap-4 flex-1 items-end">
          <textarea
            placeholder="what's on your mind"
            className=" flex-1 bg-slate-100 rounded-lg p-2"
            name="desc"
          />
          <Image
            width={20}
            height={20}
            src={"/emoji.png"}
            alt=""
            className=" w-5 h-5 cursor-pointer"
          />
          <button>send</button>
        </form>
        {/* Post Options */}
        <div className=" flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className=" flex items-center gap-2 cursor-pointer">
            <Image
              width={20}
              height={20}
              src={"/addImage.png"}
              alt=""
              className=" w-5 h-5 cursor-pointer"
            />
            Photo
          </div>
          <div className=" flex items-center gap-2 cursor-pointer">
            <Image
              width={20}
              height={20}
              src={"/addVideo.png"}
              alt=""
              className=" w-5 h-5 cursor-pointer"
            />
            Video
          </div>
          <div className=" flex items-center gap-2 cursor-pointer">
            <Image
              width={20}
              height={20}
              src={"/addEvent.png"}
              alt=""
              className=" w-5 h-5 cursor-pointer"
            />
            Event
          </div>

          <div className=" flex items-center gap-2 cursor-pointer">
            <Image
              width={20}
              height={20}
              src={"/poll.png"}
              alt=""
              className=" w-5 h-5 cursor-pointer"
            />
            Image
          </div>
        </div>
      </div>
    </div>
  );
}
