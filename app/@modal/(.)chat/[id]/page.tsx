import { Modal } from "@/components/modal";
import { DialogClose } from "@/components/ui/dialog";
import {
  ChevronDown,
  Image as ImageIcon,
  Mic,
  Minus,
  Phone,
  Send,
  Smile,
  Sticker,
  Video,
  X,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import ChatContainer from "./ChatContainer";
import { getMessage } from "@/lib/actions";
import { io } from "socket.io-client";
import { auth } from "@clerk/nextjs/server";
const socket = io("http://localhost:3001");
export default async function Chat({ id }: { id: string }) {
  const messages = await getMessage(id);
  const { userId: currentUserId } = await auth();
  return (
    <Modal>
      <div className=" w-full flex flex-col items-center bg-white rounded-md">
        {/* header */}
        <div className=" w-full p-2 flex items-center justify-between ">
          <div className="flex items-center gap-2">
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
            <div className="flex flex-col items-start">
              <span className=" text-sm font-semibold">John Doe</span>
              <span className=" text-xs text-gray-500">Active now</span>
            </div>
            <div className="">
              <ChevronDown size={16} />
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
            <DialogClose>
              <X
                size={18}
                className=" cursor-pointer hover:text-blue-500  transition-colors ease-in-out duration-150"
              />
            </DialogClose>
          </div>
        </div>

        {/* content */}

        <ChatContainer
          currentUserId={currentUserId}
          messages={messages}
          socket={socket}
        />

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
            <textarea
              placeholder="Search..."
              className="bg-transparent outline-none flex-1 text-sm resize-none "
            />
            <div className="flex p-1 rounded-full hover:bg-slate-300  cursor-pointer">
              <Smile size={18} />
            </div>
          </div>
          <div className=" flex ml-1 p-2 items-center cursor-pointer hover:bg-slate-100 rounded-full transition-colors ease-in-out duration-150 group">
            <Send
              size={18}
              className=" group-hover:text-blue-500 transition-colors ease-in-out duration-150"
            />
          </div>
          <button>Send</button>
        </div>
      </div>
    </Modal>
  );
}
