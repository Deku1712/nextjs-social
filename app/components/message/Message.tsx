import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

import React from "react";

import MessageContainer from "./MessageContainer";

export default function Message() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className=" cursor-pointer">
          <Image src="/messages.png" alt="" width={20} height={20} />
        </div>
      </PopoverTrigger>
      <PopoverContent align="center">
        <div className=" relative px-2 pb-2  bg-white min-w-[350px]  rounded-md h-[90vh] overflow-y-auto scrollbar-hide">
          <div className=" sticky top-0 bg-white w-full flex flex-col items-center">
            <div className="  w-full flex justify-between items-center px-2 pt-3 pb-1">
              <span className=" text-lg font-semibold">Chats</span>
              <div className="flex items-center gap-2 ">
                <Image
                  src="/more.png"
                  width={16}
                  height={16}
                  alt=""
                  className="cursor-pointer"
                />
                <Image src="/search.png" alt="" width={16} height={16} />
              </div>
            </div>
            <div className=" w-full flex py-2 px-4 gap-2 bg-slate-100 items-center rounded-xl my-2">
              <Image src={"/search.png"} alt="" width={14} height={14} />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none flex-1 text-sm"
              />
            </div>
            <div className=" w-full flex items-center justify-start gap-1 py-2">
              <div className=" h-9 px-4 rounded-full bg-slate-100 cursor-pointe flex items-center font-medium ">
                Inbox
              </div>
              <div className=" h-9 px-4 rounded-full  cursor-pointer flex items-center font-medium">
                Communities
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-col items-center">
            <MessageContainer />
          </div>
        </div>
        <div className=" h-2 w-full bg-white"></div>
      </PopoverContent>
    </Popover>
  );
}
