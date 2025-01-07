"use client";
import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions";
import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import React, { useOptimistic } from "react";
type RequestWithUser = FollowRequest & {
  sender: User;
};

export default function FriendRequestList({
  request,
}: {
  request: RequestWithUser[];
}) {
  const [requestState, setRequestState] =
    React.useState<RequestWithUser[]>(request);

  const accept = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await acceptFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {
      console.log(error);
    }
  };

  const decline = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await declineFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {
      console.log(error);
    }
  };

  const [optimisticRequest, removeOptimisticRequest] = useOptimistic(
    requestState,
    (state, value: number) => state.filter((req) => req.id !== value)
  );
  return (
    <>
      {optimisticRequest.length ? (
        optimisticRequest.map((req) => (
          <div key={req.id} className=" flex justify-between items-center">
            <div className=" flex items-center gap-2">
              <Image
                src={req.sender.avatar || "/noAvatar.png"}
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className=" font-medium">
                {req.sender.name + " " + req.sender.surname}
              </span>
            </div>
            <div className=" flex items-center gap-3">
              <form action={() => accept(req.id, req.senderId)}>
                <button>
                  <Image
                    src={"/accept.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </button>
              </form>
              <form action={() => decline(req.id, req.senderId)}>
                <button>
                  <Image
                    src={"/reject.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </button>
              </form>
            </div>
          </div>
        ))
      ) : (
        <span>No Friend Request</span>
      )}
    </>
  );
}
