import Image from "next/image";
import React from "react";

export default function Comment() {
  return (
    <div className="">
      {/* Write */}
      <div className=" flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/29853434/pexels-photo-29853434/free-photo-of-co-gai-tu-i-teen-tr-t-van-t-i-urban-skatepark-outdoors.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          width={32}
          height={32}
          className=" w-8 h-8 rounded-full"
        />
        <div className=" flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className=" bg-transparent outline-none flex-1"
          />
          <Image
            width={16}
            height={16}
            src={"/emoji.png"}
            alt=""
            className=" cursor-pointer"
          />
        </div>
      </div>
      {/* Comments */}
      <div className="">
        {/* Comment */}
        <div className=" flex-1 flex gap-4 justify-between mt-6">
          <Image
            src="https://images.pexels.com/photos/29853434/pexels-photo-29853434/free-photo-of-co-gai-tu-i-teen-tr-t-van-t-i-urban-skatepark-outdoors.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={40}
            height={40}
            className=" w-10 h-10  rounded-full"
          />
          <div className=" flex flex-col gap-2 flex-1">
            <span className=" font-medium"> Ngoc Tam</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              dignissimos sit possimus blanditiis aperiam nobis suscipit ullam,
              mollitia doloribus eligendi odit numquam veritatis eos eum quia
              aut ut expedita. Autem?
            </p>
            <div className="">
              <div className=" flex gap-4 items-center">
                <Image
                  src="/like.png"
                  alt=""
                  width={16}
                  height={16}
                  className=" w-4 h-4 object-cover  cursor-pointer rounded-full"
                />
                <span className=" text-gray-300">|</span>
                <span className=" text-gray-500"> 123 Likes</span>
                <div className=" text-gray-500 hover:text-black cursor-pointer">
                  Reply
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className=" w-4 h-4  cursor-pointer rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
