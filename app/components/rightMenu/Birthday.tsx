import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Birthday() {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className=" flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
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
          <button className=" bg-blue-400 text-xs text-white px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>

      {/* UpComming */}
      <div className=" p-4 bg-slate-100 rounded-lg flex items-center gap-4 ">
        <Image src={"/gift.png"} alt="gift" width={24} height={24} />
        <Link href={"/"} className=" flex flex-col gap-1 text-xs">
          <span className=" text-gray-700 font-semibold">
            Upcomming Birthday
          </span>
          <span className=" text-gray-500">
            See other 16 have birthday comming{" "}
          </span>
        </Link>
      </div>
    </div>
  );
}
