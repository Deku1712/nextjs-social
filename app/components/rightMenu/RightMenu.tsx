import React, { Suspense } from "react";
import FriendRequest from "./FriendRequest";
import Birthday from "./Birthday";
import Ad from "../Ad";
import UserInforCard from "./UserInforCard";
import UserMediaCard from "./UserMediaCard";
import { User } from "@prisma/client";

export default function RightMenu({ user }: { user?: User }) {
  return (
    <div className=" flex flex-col gap-6">
      {user && (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <UserInforCard user={user} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <UserMediaCard user={user} />
          </Suspense>
        </>
      )}

      <FriendRequest />
      <Birthday />
      <Ad size="medium" />
    </div>
  );
}
