"use client";

import { cn } from "@/libs/utils";
import { BiSolidTime } from "react-icons/bi";

type SelectTimeProps = {
  error?: string;
};

export default function SelectTime({ error }: SelectTimeProps) {
  return (
    <div
      className={cn(
        "flexBetween h-[30px] w-full cursor-pointer gap-2 rounded border border-secondLightActive px-2 py-[3px] font-openSans text-[12px] leading-[24px] text-secondDark",
        error && "border-error text-error",
      )}
    >
      <p className={cn("text-14sm caret-main", error && "text-error")}>
        Start time
      </p>

      <BiSolidTime className="text-[18px]" />
    </div>
  );
}
