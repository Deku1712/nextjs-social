"use client";
import { switchBlock, switchFollow } from "@/lib/actions";
import React, { useOptimistic } from "react";
type Props = {
  userId: string;
  currentUserId: string | null;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
};
export default function UserInofCardInteraction({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: Props) {
  const [userState, setUserState] = React.useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingSent: isFollowingSent,
  });

  const follow = async () => {
    switchOptimisticState("follow");
    try {
      await switchFollow(userId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followingSent: !prev.following && !prev.followingSent ? true : false,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  const block = async () => {
    switchOptimisticState("block");
    try {
      await switchBlock(userId);
      setUserState((prev) => ({
        ...prev,
        blocked: !prev.blocked,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (state, value: "follow" | "block") =>
      value === "follow"
        ? {
            ...state,
            following: state.following && false,
            followingSent:
              !state.following && !state.followingSent ? true : false,
          }
        : {
            ...state,
            blocked: !state.blocked,
          }
  );
  if (currentUserId === userId) return null;

  return (
    <div className=" w-full flex flex-col gap-4 ">
      <form action={follow} className="w-full">
        <button className="w-full bg-blue-500 text-white rounded-md p-2">
          {optimisticState.following
            ? "Following"
            : optimisticState.followingSent
            ? "Frient Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action={block} className="w-full flex justify-end items-center">
        <button>
          <span className="  text-red-400  text-xs cursor-pointer">
            {optimisticState.blocked ? "Unblock" : "Block User"}
          </span>
        </button>
      </form>
    </div>
  );
}
