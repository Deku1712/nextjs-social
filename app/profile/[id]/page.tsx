import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";

import React from "react";

export default function Profile() {
  return (
    <div className=" pt-6 flex gap-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home" />
      </div>
      <div className=" w-full lg:w-[70%] xl:w-[50%]">
        <div className=" flex flex-col gap-6">hehe</div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  );
}
