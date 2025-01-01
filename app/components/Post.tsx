import Image from "next/image";
import React from "react";
import Comment from "./Comment";

export default function Post() {
  return (
    <div className=" flex flex-col gap-4">
      {/* User */}
      <div className=" flex items-center justify-between">
        <div className=" flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/14563895/pexels-photo-14563895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            width={40}
            height={40}
            className=" w-10 h-10 rounded-full"
          />
          <span className=" font-medium"> Jack MCBride</span>
        </div>
        <Image
          src={"/more.png"}
          alt=""
          width={16}
          height={16}
          className=" w-4 h-4 rounded-full"
        />
      </div>
      {/* Desc */}
      <div className=" flex flex-col gap-4">
        <div className=" w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/29692594/pexels-photo-29692594/free-photo-of-qua-t-ng-giang-sinh-va-s-p-x-p-cay-thong.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          inventore eum earum eaque culpa exercitationem error aspernatur
          voluptatum, cumque magni? Cupiditate est enim reprehenderit.
          Molestias, nisi maiores. Magni, ipsa aliquid.
        </p>
      </div>
      {/* Interaction */}
      <div className=" flex items-center justify-between text-sm my-4">
        <div className=" flex gap-8">
          <div className=" flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src={"/like.png"}
              alt=""
              width={16}
              height={16}
              className=" w-4 h-4 cursor-pointer"
            />
            <span className=" text-gray-300">|</span>
            <span className=" text-gray-500">
              123
              <span className=" hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className=" flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src={"/comment.png"}
              alt=""
              width={16}
              height={16}
              className=" w-4 h-4 cursor-pointer"
            />
            <span className=" text-gray-300">|</span>
            <span className=" text-gray-500">
              123
              <span className=" hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className=" flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
          <Image
            src={"/share.png"}
            alt=""
            width={16}
            height={16}
            className=" w-4 h-4 cursor-pointer"
          />
          <span className=" text-gray-300">|</span>
          <span className=" text-gray-500">
            123
            <span className=" hidden md:inline"> Shares</span>
          </span>
        </div>
      </div>
      <Comment />
    </div>
  );
}
