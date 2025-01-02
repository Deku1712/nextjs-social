import React from "react";
import FriendRequest from "./FriendRequest";
import Birthday from "./Birthday";
import Ad from "./Ad";
import UserInforCard from "./UserInforCard";
import UserMediaCard from "./UserMediaCard";

export default function RightMenu({ userId }: { userId: string }) {
  return (
    <div className=" flex flex-col gap-6">
      {userId && (
        <>
          <UserInforCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      )}

      <FriendRequest />
      <Birthday />
      <Ad size="medium" />
    </div>
  );
}
