"use client";

import { cn } from "@/libs/utils";
import { nanoid } from "nanoid";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";

type SelectStarProps = {
  addStars: (stars: number) => void;
};

export default function SelectStar({ addStars }: SelectStarProps) {
  const [stars, setStars] = useState(0);
  return (
    <div className="flex gap-1 text-[12px] tablet:gap-[6px] tablet:text-[16px]">
      {Array.from({ length: 5 }).map((_, index) => (
        <FaStar
          key={nanoid()}
          className={cn("text-neutral/20", index < stars && "text-alert")}
          onClick={() => {
            setStars(index + 1);
            addStars(index + 1);
          }}
        />
      ))}
    </div>
  );
}
