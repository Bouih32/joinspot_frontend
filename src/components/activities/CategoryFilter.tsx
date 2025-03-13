"use client";

import { addParam, cn } from "@/libs/utils";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { FaRegCompass, FaRegLightbulb } from "react-icons/fa";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { PiChefHatBold } from "react-icons/pi";

type CategoryFilterProps = { title: string };

export default function CategoryFilter({ title }: CategoryFilterProps) {
  const params = useSearchParams();
  const router = useRouter();
  const category = params.get("category");

  const icon =
    title === "cuisine" ? (
      <PiChefHatBold />
    ) : title === "sport" ? (
      <MdOutlineSportsBaseball />
    ) : title === "learning" ? (
      <FaRegLightbulb />
    ) : (
      <FaRegCompass />
    );

  return (
    <div
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-[5px] px-2 py-3 text-14lg text-darker hover:bg-secondLight hover:text-14xxl hover:text-main laptop:py-5",
        title === category && "bg-secondLight text-main",
      )}
      onClick={() => addParam("category", title, params, router)}
    >
      <div className="text-[24px]">{icon}</div>
      <p className="first-letter:uppercase">{title}</p>
    </div>
  );
}
