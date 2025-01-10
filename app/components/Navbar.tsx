import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Message from "./message/Message";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-24  ">
      {/* Left */}
      <div className=" md:hidden lg:block w-[20%]">
        <Link className="font-bold text-xl text-blue-600" href={"/"}>
          {" "}
          LAMASOCIAL
        </Link>
      </div>

      {/* Center */}
      <div className="hidden md:flex w-[50%] justify-between items-center">
        <div className=" flex gap-6 text-black">
          <Link href={"/"} className=" flex items-center gap-2">
            <Image
              src={"/home.png"}
              alt="HomePage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Homepage</span>
          </Link>
          <Link href={"/"} className=" flex items-center gap-2">
            <Image
              src={"/friends.png"}
              alt="Friends"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href={"/"} className=" flex items-center gap-2">
            <Image
              src={"/stories.png"}
              alt="Stories"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
          <Image src={"/search.png"} alt="" width={14} height={14} />
        </div>
      </div>

      {/* Right */}
      <div className="w-[30%] flex gap-4 xl:gap-8 justify-end items-center">
        <div className="hidden md:flex gap-4 xl:gap-8 justify-end items-center ">
          <ClerkLoading>
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
          </ClerkLoading>
        </div>
        <div className="hidden md:flex gap-4 xl:gap-8 justify-end items-center">
          <ClerkLoaded>
            <SignedIn>
              <div className=" cursor-pointer">
                <Image src="/people.png" alt="" width={20} height={20} />
              </div>
              <Message />
              <div className=" cursor-pointer">
                <Image src="/notifications.png" alt="" width={20} height={20} />
              </div>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div className=" cursor-pointer flex items-center gap-2 text-sm">
                <Image src={"/noAvatar.png"} alt="" width={20} height={20} />
                <Link href="/sign-in">Login/Register</Link>
              </div>
            </SignedOut>
          </ClerkLoaded>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
}
