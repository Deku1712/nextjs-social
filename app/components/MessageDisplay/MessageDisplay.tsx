import Image from "next/image";
import React, { HTMLAttributes } from "react";
import { clsx } from "clsx";

interface MessageDisplayProps extends HTMLAttributes<HTMLDivElement> {
  type: "sender" | "receiver";
}

function MessageDisplay({ type, ...props }: MessageDisplayProps) {
  return (
    <div
      className={clsx(
        "flex items-end gap-2 w-full",
        type === "sender" ? "flex-row-reverse" : "flex-row"
      )}
      {...props}
    >
      <Image
        src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        width={32}
        height={32}
        className="rounded-full w-8 h-8 "
      />
      {/* messages */}
      <div className="flex flex-col gap-1 max-w-[65%]">
        <div className="">
          <div className=" w-full flex justify-end items-center mb-1 pr-1">
            <span className=" text-xs self-end ">13:00</span>
          </div>
          <div className=" px-2 py-3 rounded-lg bg-slate-100">
            <div className=" my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              aperiam nostrum consequuntur explicabo, aspernatur, vel laboriosam
              fugiat ut sint ea tempore corporis! Numquam explicabo perferendis
              sapiente dignissimos quis corrupti fugiat.
            </div>
          </div>
        </div>
        <div className=" px-2 py-3 rounded-lg bg-slate-100">
          <div className=" my-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            aperiam nostrum consequuntur explicabo, aspernatur, vel laboriosam
            fugiat ut sint ea tempore corporis! Numquam explicabo perferendis
            sapiente dignissimos quis corrupti fugiat.
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageDisplay;
