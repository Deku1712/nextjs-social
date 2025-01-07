"use client";
import { updateProfile } from "@/lib/actions";
import { User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useActionState, useState } from "react";

export default function UpdateUser({ user }: { user: User }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [cover, setCover] = useState<any>(false);

  const handleAction = (form: FormData) => {
    formAction({ form, cover: cover?.secure_url || "" });
  };

  const [state, formAction] = useActionState(updateProfile, {
    success: false,
    error: false,
  });

  return (
    <div className="">
      <span
        className=" text-blue-500 text-xs cursor-pointer"
        onClick={handleOpen}
      >
        Update
      </span>
      {open && (
        <div className=" absolute w-full h-screen top-0 left-0 bg-black bg-opacity-65 flex flex-col items-center justify-center z-50   ease-in-out duration-500 ">
          <form
            action={handleAction}
            className=" relative p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 "
          >
            <h1>Update Profile</h1>
            <div className=" mt-4 text-xs text-gray-500">
              Use the navbar profile to change the avatar or username
            </div>
            {/* Cover Picture */}
            <CldUploadWidget
              uploadPreset="ewxqah9d"
              onSuccess={(res) => {
                setCover(res.info);
              }}
            >
              {({ open }) => {
                return (
                  <div className=" flex flex-col gap-4 my-4">
                    <label htmlFor="">Cover Picture</label>
                    <div className=" flex items-center gap-2 cursor-pointer">
                      <Image
                        src={
                          cover?.secure_url ||
                          user.cover ||
                          "/public/noAvatar.png"
                        }
                        alt=""
                        width={48}
                        height={32}
                        className=" w-12 h-8 rounded-md object-cover"
                      />
                      <span
                        className="text-xs text-gray-500 underline"
                        onClick={() => open()}
                      >
                        Change
                      </span>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>

            {/* Wrraper */}
            <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
              {/*input fields*/}
              <div className="flex flex-col gap-4 flex-1">
                <label htmlFor="" className=" text-xs text-gray-500">
                  First Name
                </label>
                <input
                  name="name"
                  type="text"
                  className=" ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  placeholder={user.name || "tam"}
                />
              </div>
              {/*input fields*/}
              <div className="flex flex-col gap-4 flex-1">
                <label htmlFor="" className=" text-xs text-gray-500">
                  SurName
                </label>
                <input
                  name="surname"
                  type="text"
                  className=" ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  placeholder={user.surname || "tam"}
                />
              </div>
              {/*input fields*/}
              <div className="flex flex-col gap-4 flex-1">
                <label htmlFor="" className=" text-xs text-gray-500">
                  Description
                </label>
                <input
                  name="description"
                  type="text"
                  className=" ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  placeholder={user.description || "tam"}
                />
              </div>
              {/*input fields*/}
              <div className="flex flex-col gap-4 flex-1">
                <label htmlFor="" className=" text-xs text-gray-500">
                  City
                </label>
                <input
                  name="city"
                  type="text"
                  className=" ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  placeholder={user.city || "tam"}
                />
              </div>
              {/*input fields*/}
              <div className="flex flex-col gap-4 flex-1">
                <label htmlFor="" className=" text-xs text-gray-500">
                  Work
                </label>
                <input
                  name="work"
                  type="text"
                  className=" ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  placeholder={user.work || "tam"}
                />
              </div>
              {/*input fields*/}
              <div className="flex flex-col gap-4 flex-1">
                <label htmlFor="" className=" text-xs text-gray-500">
                  School
                </label>
                <input
                  name="school"
                  type="text"
                  className=" ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  placeholder={user.school || "tam"}
                />
              </div>
              {/*input fields*/}
              <div className="flex flex-col gap-4 flex-1">
                <label htmlFor="" className=" text-xs text-gray-500">
                  website
                </label>
                <input
                  name="website"
                  type="text"
                  className=" ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  placeholder={user.website || "tam"}
                />
              </div>
            </div>
            <button className=" bg-blue-500 p-2 mt-2 rounded-md text-sm text-white">
              Update
            </button>
            {state.success && (
              <span className="text-green-500">Profile has been updated!</span>
            )}
            {state.error && (
              <span className="text-red-500">Something went wrong!</span>
            )}
            <div
              className=" absolute text-xl right-3 top-3 cursor-pointer"
              onClick={handleClose}
            >
              x
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
