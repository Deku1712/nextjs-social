import {
  ChevronDown,
  Image as ImageIcon,
  Mic,
  Minus,
  Phone,
  Smile,
  Sticker,
  Video,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Chat({ id }: { id: string }) {
  console.log(id);
  return (
    <div className=" w-full flex flex-col items-center bg-white">
      {/* header */}
      <div className=" w-full p-2 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <Link href="/chat/1">
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                width={32}
                height={32}
                className="rounded-full w-8 h-8 object-cover "
              />
              <span className=" bg-green-300 rounded-full w-3 h-3 ring-[1px] ring-gray-950 absolute right-0 bottom-0 "></span>
            </div>
          </Link>
          <div className="flex flex-col items-start">
            <span className=" text-sm font-semibold">John Doe</span>
            <span className=" text-xs text-gray-500">Active now</span>
          </div>
          <div className="">
            <ChevronDown size={12} />
          </div>
        </div>
        <div className=" flex items-center gap-4">
          <Phone
            size={18}
            className=" cursor-pointer hover:text-blue-500  transition-colors ease-in-out duration-150"
          />
          <Video
            size={18}
            className=" cursor-pointer hover:text-blue-500  transition-colors ease-in-out duration-150"
          />
          <Minus
            size={18}
            className=" cursor-pointer hover:text-blue-500  transition-colors ease-in-out duration-150"
          />
          <X
            size={18}
            className=" cursor-pointer hover:text-blue-500  transition-colors ease-in-out duration-150"
          />
        </div>
      </div>

      {/* content */}
      <div className=" w-full h-[500px] px-2 flex flex-col overflow-y-auto">
        <div className=" flex justify-start items-end gap-2 w-full max-w-[60%]">
          <Image
            src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={32}
            height={32}
            className="rounded-full w-8 h-8 "
          />
          <div className="flex flex-col gap-1">
            <div className=" px-2 py-3 rounded-lg bg-slate-100">
              <div className=" my-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis aperiam nostrum consequuntur explicabo, aspernatur,
                vel laboriosam fugiat ut sint ea tempore corporis! Numquam
                explicabo perferendis sapiente dignissimos quis corrupti fugiat.
              </div>
            </div>
            <div className=" px-2 py-3 rounded-lg bg-slate-100">
              <div className=" my-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis aperiam nostrum consequuntur explicabo, aspernatur,
                vel laboriosam fugiat ut sint ea tempore corporis! Numquam
                explicabo perferendis sapiente dignissimos quis corrupti fugiat.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* interaction */}
      <div className=" w-full flex items-center gap-2 p-2 mb-2">
        <div className=" flex gap-4 items-center">
          <Mic
            size={18}
            className=" cursor-pointer hover:text-blue-500  transition-colors ease-in-out duration-150"
          />
          <ImageIcon
            size={18}
            className=" cursor-pointer hover:text-blue-500  transition-colors ease-in-out duration-150"
          />
          <Sticker
            size={18}
            className=" cursor-pointer hover:text-blue-500  transition-colors ease-in-out duration-150"
          />
        </div>
        <div className=" w-full flex py-2 px-4 gap-2 bg-slate-100 items-center rounded-xl my-2">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none flex-1 text-sm"
          />
          <div className="flex p-1 rounded-full hover:bg-slate-300 cursor-pointer">
            <Smile size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
