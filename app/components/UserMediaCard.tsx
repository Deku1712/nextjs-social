import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UserMediaCard({ userId }: { userId: string }) {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className=" flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link className=" text-blue-400" href={""}>
          See All
        </Link>
      </div>
      <div className=" flex gap-4 justify-start flex-wrap">
        <div className=" relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/29955838/pexels-photo-29955838/free-photo-of-c-nh-mua-dong-m-ap-v-i-ca-cao-nong-va-k-o-d-o.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className=" relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/29955838/pexels-photo-29955838/free-photo-of-c-nh-mua-dong-m-ap-v-i-ca-cao-nong-va-k-o-d-o.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className=" relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/29955838/pexels-photo-29955838/free-photo-of-c-nh-mua-dong-m-ap-v-i-ca-cao-nong-va-k-o-d-o.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className=" relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/29955838/pexels-photo-29955838/free-photo-of-c-nh-mua-dong-m-ap-v-i-ca-cao-nong-va-k-o-d-o.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className=" relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/29955838/pexels-photo-29955838/free-photo-of-c-nh-mua-dong-m-ap-v-i-ca-cao-nong-va-k-o-d-o.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className=" relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/29955838/pexels-photo-29955838/free-photo-of-c-nh-mua-dong-m-ap-v-i-ca-cao-nong-va-k-o-d-o.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className=" relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/29955838/pexels-photo-29955838/free-photo-of-c-nh-mua-dong-m-ap-v-i-ca-cao-nong-va-k-o-d-o.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
