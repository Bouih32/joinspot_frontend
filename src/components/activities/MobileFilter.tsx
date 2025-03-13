"use client";
import { cn } from "@/libs/utils";
import { nanoid } from "nanoid";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HeaderProps } from "./MobileUpperHeader";

export default function MobileFilter({ categories }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>("Categories");

  const filters = ["Saved Posts", "My Posts", "FQA"];

  const handleSelect = (ele: string) => {
    setSelected(ele);
    setOpen(false);
  };

  return (
    <div className="relative rounded-[2px] border border-secondLightActive px-2 py-[4.5px] text-14sm text-second tablet:hidden">
      <div
        className="flexBetween w-[241px]"
        onClick={() => setOpen((prev) => !prev)}
      >
        <p className="first-letter:uppercase">{selected}</p>
        {open ? <IoIosArrowUp className="text-main" /> : <IoIosArrowDown />}
      </div>
      {open && (
        <>
          <div
            className="fixed bottom-0 left-0 top-20 w-full bg-secondLight/50"
            onClick={() => setOpen(false)}
          ></div>
          <div
            className="absolute left-0 top-[120%] w-full bg-white text-12sm shadow-33xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-secondLightHover">
              {categories.map((ele) => (
                <p
                  key={nanoid()}
                  className={cn(
                    "py-1 pl-2 first-letter:uppercase",
                    ele.categoryName === selected && "bg-secondLight text-main",
                  )}
                  onClick={() => handleSelect(ele.categoryName)}
                >
                  {ele.categoryName}
                </p>
              ))}
            </div>
            <div className="text-neutralDarkActive">
              {filters.map((ele) => (
                <p
                  key={nanoid()}
                  className={cn(
                    "py-1 pl-2",
                    ele === selected && "bg-secondLight text-main",
                  )}
                  onClick={() => handleSelect(ele)}
                >
                  {ele}
                </p>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
