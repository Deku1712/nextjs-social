"use client";

import MessageDisplay from "@/app/components/MessageDisplay/MessageDisplay";
import { Messages } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

function ChatContainer({
  messages,
  currentUserId,
  socket,
}: {
  messages: Messages[];
  socket: Socket;
  currentUserId: string;
}) {
  const [chat, setChat] = useState<Messages[]>(messages);

  useEffect(() => {
    socket.on("recieve_message", (msg: Messages) => {
      setChat((prev) => [...prev, msg]);
    });

    // socket.on("user_typing", (data) => {
    //   setTyping((prev) => {
    //     if (typing.includes(data.user) && data.typing === true) return prev;
    //     if (data.typing === false) {
    //       return prev.filter((u) => u !== data.user);
    //     } else {
    //       return [...prev, data.user];
    //     }
    //   });
    // });

    return () => {
      socket.off("recieve_message");
      //   socket.off("user_typing");
    };
  });
  return (
    <div className=" w-full h-[500px] px-2 flex flex-col gap-3 overflow-y-auto">
      {chat.map((msg) => (
        <MessageDisplay
          key={msg.id}
          type={msg.senderId === currentUserId ? "sender" : "receiver"}
        />
      ))}
    </div>
  );
}

export default ChatContainer;
