"use client";

import { useState } from "react";
import Button from "../Button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/libs/utils";
import { bankAlert } from "@/actions/activityActions";

export default function AlertBtn({ userId }: { userId: string }) {
  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    setLoading(true);
    await bankAlert(userId);
    setLoading(false);
  };
  return (
    <div className={cn(loading && "pointer-events-none")} onClick={handlePay}>
      <Button classname="bg-error" disabled={loading}>
        Alert
        {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
      </Button>
    </div>
  );
}
