"use client";

import { cn } from "@/libs/utils";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

type QuestionCardProps = {
  title: string;
  para: string;
};

export default function QuestionCard({ title, para }: QuestionCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="w-[329px] cursor-pointer space-y-2 rounded-[8px] border border-neutralLightActive px-[18px] py-5 tablet:w-[676px] tablet:space-y-[13px] tablet:p-4 laptop:w-[1096px]"
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="flexBetween gap-4 text-darker">
        <h4 className={cn("text-14lg tablet:text-16lg", open && "text-main")}>
          {title}
        </h4>
        {open ? (
          <FaMinus className="text-main" />
        ) : (
          <FaPlus className="hover:text-main" />
        )}
      </div>
      <p
        className={cn(
          "hidden text-10lg text-neutral tablet:text-14lg",
          open && "block",
        )}
      >
        {para}
      </p>
    </div>
  );
}
