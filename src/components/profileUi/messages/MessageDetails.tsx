"use client";

import { markAsRead } from "@/actions/getActivities";
import { useRouter } from "next/navigation";
import React from "react";
import { IoSend } from "react-icons/io5";

export default function MessageDetails({ messageId }: { messageId: string }) {
  const router = useRouter();
  const handleSeen = async () => {
    router.push(`/user/messages/${messageId}`);
    await markAsRead(messageId);
  };
  return (
    <div onClick={handleSeen}>
      <IoSend className="cursor-pointer hover:text-main" />
    </div>
  );
}
