import Image from "next/image";
import React from "react";
type Size = "small" | "medium" | "large";
export default function Ad({ size }: { size: Size }) {
  return (
    <div
      className=" p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4
    "
    >
      <div className=" flex justify-between items-center font-medium">
        <span className="">Sponsored Ads</span>
        <Image
          src={"/more.png"}
          alt=""
          width={16}
          height={16}
          className=" cursor-pointer"
        />
      </div>
      <div
        className={`flex flex-col mt-4 ${size === "small" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "small" ? "h-24" : size === "medium" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src={
              "https://images.pexels.com/photos/29864180/pexels-photo-29864180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className=" rounded-lg object-cover"
          />
        </div>
      </div>
      <div className=" flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/29764572/pexels-photo-29764572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          width={16}
          height={16}
          className="w-4 h-4 object-cover rounded-full"
        />
        <span className=" text-blue-500 font-semibold">TamNe</span>
      </div>
      <p className={` ${size === "small" ? "text-xs" : "text-sm"}`}>
        {size === "small"
          ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qu"
          : size === "medium"
          ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates."
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates."}
      </p>
      <button className=" bg-slate-200 text-gray-500 p-2 text-xs rounded-lg">
        Learn more
      </button>
    </div>
  );
}
