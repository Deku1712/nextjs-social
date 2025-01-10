"use client";
import React, { ReactNode } from "react";
import { Dialog, DialogContent, DialogOverlay } from "./ui/dialog";
import { useRouter } from "next/navigation";
export const Modal = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  };
  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogOverlay>
        <DialogContent className=" max-w-2xl p-0">{children}</DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};
