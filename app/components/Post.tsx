import Image from "next/image";
import React from "react";
import Comment from "./Comment";
import { Post as PostType, User } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";
import PostInfo from "./feed/PostInfo";

type FeedPostType = PostType & { user: User } & {
  likes: [{ userId: string }];
} & {
  _count: { comments: number };
};
export default async function Post({ post }: { post: FeedPostType }) {
  const { userId } = await auth();

  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar || "/noAvatar.png"}
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">
            {post.user.name && post.user.surname
              ? post.user.name + " " + post.user.surname
              : post.user.username}
          </span>
        </div>
        {userId === post.user.id && <PostInfo postId={post.id} />}
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        {post.img && (
          <div className="w-full min-h-96 relative">
            <Image
              src={post.img}
              fill
              className="object-cover rounded-md"
              alt=""
            />
          </div>
        )}
        <p>{post.desc}</p>
      </div>
      {/* Interaction */}
      <div className=" flex items-center justify-between text-sm my-4">
        <div className=" flex gap-8">
          <div className=" flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src={"/like.png"}
              alt=""
              width={16}
              height={16}
              className=" w-4 h-4 cursor-pointer"
            />
            <span className=" text-gray-300">|</span>
            <span className=" text-gray-500">
              123
              <span className=" hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className=" flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src={"/comment.png"}
              alt=""
              width={16}
              height={16}
              className=" w-4 h-4 cursor-pointer"
            />
            <span className=" text-gray-300">|</span>
            <span className=" text-gray-500">
              123
              <span className=" hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className=" flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
          <Image
            src={"/share.png"}
            alt=""
            width={16}
            height={16}
            className=" w-4 h-4 cursor-pointer"
          />
          <span className=" text-gray-300">|</span>
          <span className=" text-gray-500">
            123
            <span className=" hidden md:inline"> Shares</span>
          </span>
        </div>
      </div>
      <Comment />
    </div>
  );
}
