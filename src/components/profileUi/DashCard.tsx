"use client";

import { cn } from "@/libs/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

type DashCardProps = {
  link: string;
  icon: ReactElement;
  title: string;
  value: number;
};

export default function DashCard({ link, icon, title, value }: DashCardProps) {
  const pathName = usePathname();
  return (
    <Link
      href={link}
      className={cn(
        "group flex h-[61px] w-[111px] cursor-pointer flex-col justify-between bg-secondLight px-3 py-[7px] text-second hover:bg-main hover:text-white tablet:h-[88px] tablet:w-[162px] tablet:rounded-xl tablet:px-[6px] tablet:py-[14px] tablet:text-[18px] laptop:h-[101px] laptop:w-[200px] laptop:px-3",
        link === pathName && "bg-main text-white",
      )}
    >
      <div className="flexBetween">
        {icon}
        <FaArrowTrendUp
          className={cn(
            "text-success group-hover:text-white",
            link === pathName && "text-white",
          )}
        />
      </div>
      <div className="flex items-end justify-between gap-1">
        <p className="text-12lg tablet:text-14lg laptop:text-16lg">{title}</p>
        <span
          className={cn(
            "text-nowrap text-12xl text-main group-hover:text-white tablet:text-22xl",
            link === pathName && "bg-main text-white",
          )}
        >
          {value} {title === "Revenue" && "$"}
        </span>
      </div>
    </Link>
  );
}
