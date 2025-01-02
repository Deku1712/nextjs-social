import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UserInforCard({ userId }: { userId: string }) {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className=" flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link className=" text-blue-400" href={""}>
          See All
        </Link>
      </div>
      <div className=" flex flex-col gap-4 text-gray-500">
        <div className=" flex items-center gap-2">
          <span className=" text-xl text-black">Tamne</span>
          <span className=" text-sm ">ngoctam@</span>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          expedita vel dolores debitis magni reprehenderit ipsa alias neque,
          nobis sunt veniam eos ullam porro ratione, fugiat minus nostrum
          repellendus. Similique.
        </p>
        <div className=" flex items-center gap-2">
          <Image
            src="/map.png"
            alt=""
            width={16}
            height={16}
            className=" cursor-pointer"
          />
          <span className="">
            Living in <b>Dong Hoi</b>
          </span>
        </div>
        <div className=" flex items-center gap-2">
          <Image
            src="/school.png"
            alt=""
            width={16}
            height={16}
            className=" cursor-pointer"
          />
          <span className="">
            Went to <b>Fpt University</b>
          </span>
        </div>
        <div className=" flex items-center gap-2">
          <Image
            src="/work.png"
            alt=""
            width={16}
            height={16}
            className=" cursor-pointer"
          />
          <span className="">
            Work at <b>HaiBaZo Company</b>
          </span>
        </div>
        <div className=" flex justify-between items-center">
          <div className=" flex items-center gap-2">
            <Image
              src={"/link.png"}
              alt=""
              width={16}
              height={16}
              className=" cursor-pointer"
            />
            <span className=" font-semibold text-blue-500">tam.dev</span>
          </div>
          <div className=" flex items-center gap-2">
            <Image
              src={"/date.png"}
              alt=""
              width={16}
              height={16}
              className=" cursor-pointer"
            />
            <span className="">Joined January 2025</span>
          </div>
        </div>
        <button className=" p-2 bg-blue-400 text-sm text-white rounded-lg">
          Following
        </button>
        <span className=" self-end text-red-400 text-xs cursor-pointer">
          Block user
        </span>
      </div>
    </div>
  );
}
