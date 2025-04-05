"use client";

import { handleUsed } from "@/actions/getActivities";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { LuTicketCheck, LuTicketMinus } from "react-icons/lu";

export default function MarkAsUsed({
  id,
  used,
}: {
  id: string;
  used: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleClick = async () => {
    setLoading(true);
    await handleUsed(id);

    setLoading(false);
    router.refresh();
  };
  return (
    <div onClick={handleClick}>
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin" />
      ) : (
        <>
          {used ? (
            <LuTicketMinus className="cursor-pointer text-[20px] hover:text-main" />
          ) : (
            <LuTicketCheck className="cursor-pointer text-[20px] hover:text-main" />
          )}
        </>
      )}
    </div>
  );
}
