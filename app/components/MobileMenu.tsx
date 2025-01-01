"use client";
import Link from "next/link";
import React from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <div
        className=" flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={` w-6 h-1 bg-blue-500 rounded-sm origin-left ${
            isOpen && "rotate-45 "
          } ease-in-out duration-500`}
        ></div>
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen && " opacity-0"
          } ease-in-out duration-500`}
        ></div>
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm origin-left ${
            isOpen && "-rotate-45 "
          } ease-in-out duration-500`}
        ></div>
      </div>

      {isOpen && (
        <div className=" absolute  left-0 top-24  w-full h-[calc(100vh-96px] bg-white flex flex-col items-center justify-center  gap-8  font-medium text-xl text-black">
          <div>
            <Link href={"/"}>Home</Link>
          </div>
          <div>
            <Link href={"/"}>Friends</Link>
          </div>
          <div>
            <Link href={"/"}>Groups</Link>
          </div>
          <div>
            <Link href={"/"}>Stories</Link>
          </div>{" "}
          <div>
            <Link href={"/"}>Login</Link>
          </div>
        </div>
      )}
    </div>
  );
}
