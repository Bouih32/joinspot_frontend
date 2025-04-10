"use client";

import { markAsRead } from "@/actions/getActivities";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IoSend } from "react-icons/io5";

export default function MessageDetails({ messageId }: { messageId: string }) {
  const pathName = usePathname();
  const router = useRouter();

  const link = pathName.startsWith("/admin")
    ? `/admin/support/${messageId}`
    : `/user/messages/${messageId}`;
  const handleSeen = async () => {
    router.push(link);
    await markAsRead(messageId);
  };
  return (
    <div onClick={handleSeen}>
      <IoSend className="cursor-pointer hover:text-main" />
    </div>
  );
}
