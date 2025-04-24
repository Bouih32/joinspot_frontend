"use client";

import { useState } from "react";
import Button from "../Button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/libs/utils";
import { payUser } from "@/actions/activityActions";

export default function PayButton({
  amout,
  userId,
}: {
  amout: number;
  userId: string;
}) {
  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    setLoading(true);
    await payUser(amout, userId);
    setLoading(false);
  };
  return (
    <div className={cn(loading && "pointer-events-none")} onClick={handlePay}>
      <Button classname="bg-success" disabled={loading}>
        Pay
        {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
      </Button>
    </div>
  );
}
