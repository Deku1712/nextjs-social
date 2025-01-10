"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MessageContainer() {
  return (
    <>
      {Array.from({ length: 15 }).map((_, i) => (
        <Link href={`/chat/${i}`} key={i} className=" w-full">
          <div
            key={i}
            className=" w-full flex gap-2 items-center p-2  hover:bg-slate-100 rounded-md cursor-pointer transition-colors ease-in-out duration-50 "
          >
            <Image
              src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={56}
              height={56}
              className="rounded-full w-[56px] h-[56px] object-cover p-1"
            />
            <div className="flex flex-1 flex-col p-[6px] gap-1">
              <span className=" text-sm font-semibold">John Doe</span>
              <div className=" flex gap-1 items-center">
                <span className=" text-xs text-gray-500">Hello</span>
                <span className=" text-xs text-gray-500">.</span>
                <span className=" text-xs text-gray-500">17m</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
