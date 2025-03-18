"use client";

import { cn } from "@/libs/utils";
import { nanoid } from "nanoid";
import { useState } from "react";
import { CgAdd } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type SelectTagProps = {
  addTag: (tag: string) => void;
};

export default function SelectTag({ addTag }: SelectTagProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const data = ["sleepng", "running", "swiming", "eating"];

  const handleAdd = (tag: string) => {
    setSelected(
      selected?.includes(tag)
        ? selected.filter((ele) => ele !== tag) // Remove if already present
        : selected.length < 3
          ? [...selected, tag]
          : selected,
    );
    setOpen(false);
    addTag(selected.join("-"));
  };

  return (
    <div
      className="relative space-y-1"
      onClick={() => setOpen((prev) => !prev)}
    >
      <div
        className={cn(
          "flexBetween h-[30px] w-full cursor-pointer gap-3 rounded border border-secondLightActive px-2 py-[3px] font-openSans text-[14px] leading-[24px] text-secondDark",
          selected.length > 0 && "font-semibold text-main",
        )}
      >
        <p>{selected.length > 0 ? selected.join("-") : "Select tags"}</p>
        {open ? (
          <IoIosArrowUp className="hover:text-main" />
        ) : (
          <IoIosArrowDown className="hover:text-main" />
        )}
      </div>
      {open && (
        <div className="absolute left-0 top-[120%] z-50 w-full space-y-[5px] rounded bg-white p-[6px] shadow-22xl">
          {data.map((ele) => (
            <div
              onClick={() => handleAdd(ele)}
              key={nanoid()}
              className={cn(
                "flex cursor-pointer items-center gap-[9px] rounded-[2px] p-[9px] text-center text-14lg text-neutralHover hover:bg-[#F8F8F8]",
                selected.includes(ele) && "bg-[#F8F8F8]",
              )}
            >
              <CgAdd
                className={cn(
                  "text-[20px]",
                  selected.includes(ele) && "rotate-45 text-main",
                )}
              />
              <p>{ele}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
