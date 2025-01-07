"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";
import { Profile } from "@/schemaValidations/profile.schema";
import { revalidatePath } from "next/cache";

export const switchFollow = async (userId: string) => {
  const { userId: curentUserId } = await auth();

  if (!curentUserId) throw new Error("You are not authenticated");

  try {
    const existingFollow = await prisma.follower.findFirst({
      where: {
        followerId: curentUserId,
        followingId: userId,
      },
    });
    if (existingFollow) {
      await prisma.follower.delete({
        where: {
          id: existingFollow.id,
        },
      });
    } else {
      const existingRequest = await prisma.followRequest.findFirst({
        where: {
          senderId: curentUserId,
          receiverId: userId,
        },
      });
      if (existingRequest) {
        await prisma.followRequest.delete({
          where: {
            id: existingRequest.id,
          },
        });
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: curentUserId,
            receiverId: userId,
          },
        });
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
export const switchBlock = async (userId: string) => {
  const { userId: currentUserId } = await auth();

  if (!currentUserId) throw new Error("You are not authenticated");

  try {
    const existingBlock = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: userId,
      },
    });
    if (existingBlock) {
      await prisma.block.delete({
        where: {
          id: existingBlock.id,
        },
      });
    } else {
      await prisma.block.create({
        data: {
          blockerId: currentUserId,
          blockedId: userId,
        },
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
export const acceptFollowRequest = async (userId: string) => {
  const { userId: currentUserId } = await auth();

  if (!currentUserId) throw new Error("You are not authenticated");

  try {
    const existingRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });
    if (existingRequest) {
      await prisma.followRequest.delete({ where: { id: existingRequest.id } });
      await prisma.follower.create({
        data: { followerId: userId, followingId: currentUserId },
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
export const declineFollowRequest = async (userId: string) => {
  const { userId: currentUserId } = await auth();

  if (!currentUserId) throw new Error("You are not authenticated");

  try {
    const existingRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });
    if (existingRequest) {
      await prisma.followRequest.delete({ where: { id: existingRequest.id } });
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const updateProfile = async (
  preState: {
    success: boolean;
    error: boolean;
  },
  payload: {
    form: FormData;
    cover?: string;
  }
) => {
  const { form, cover } = payload;
  const { userId } = await auth();
  if (userId === null) return { success: false, error: true };
  const fields = Object.fromEntries(form);

  const filterFields = Object.fromEntries(
    Object.entries(fields).filter(([, value]) => value !== "")
  );

  const validateFields = Profile.safeParse({ cover, ...filterFields });
  if (!validateFields.success) {
    console.log(validateFields.error.flatten().fieldErrors);
    return { success: false, error: true };
  }

  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: validateFields.data,
    });
    revalidatePath(`/profile/${userId}`);
    return { success: true, error: false };
  } catch (error) {
    console.log(error);
    return { success: false, error: true };
  }
};
