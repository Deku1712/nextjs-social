import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FriendRequest() {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className=" flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link className=" text-blue-400" href={""}>
          See All
        </Link>
      </div>
      {/* User */}
      <div className=" flex justify-between items-center">
        <div className=" flex items-center gap-2">
          <Image
            src="https://images.pexels.com/photos/29768361/pexels-photo-29768361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className=" font-medium">Wayne Run</span>
        </div>
        <div className=" flex items-center gap-3">
          <Image
            src={"/accept.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src={"/reject.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* User */}
      <div className=" flex justify-between items-center">
        <div className=" flex items-center gap-2">
          <Image
            src="https://images.pexels.com/photos/29768361/pexels-photo-29768361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className=" font-medium">Wayne Run</span>
        </div>
        <div className=" flex items-center gap-3">
          <Image
            src={"/accept.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src={"/reject.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* User */}
      <div className=" flex justify-between items-center">
        <div className=" flex items-center gap-2">
          <Image
            src="https://images.pexels.com/photos/29768361/pexels-photo-29768361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className=" font-medium">Wayne Run</span>
        </div>
        <div className=" flex items-center gap-3">
          <Image
            src={"/accept.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src={"/reject.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
