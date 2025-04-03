"use client";

import { deleteMessage } from "@/actions/getActivities";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiSolidTrash } from "react-icons/bi";

export default function DeleteMessage({ messageId }: { messageId: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleDelete = async () => {
    setLoading(true);
    await deleteMessage(messageId);
    setLoading(true);
    router.refresh();
  };
  return (
    <div onClick={handleDelete}>
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin" />
      ) : (
        <BiSolidTrash className="cursor-pointer hover:text-main" />
      )}
    </div>
  );
}
