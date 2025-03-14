"use client";
import { addParam, cn } from "@/libs/utils";
import { nanoid } from "nanoid";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HeaderProps } from "./MobileUpperHeader";
import { useRouter, useSearchParams } from "next/navigation";

export default function MobileFilter({ categories }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>("Categories");
  const params = useSearchParams();
  const router = useRouter();
  const category = params.get("category");
  const my = params.get("my");

  const filters = [
    { title: "Saved Posts", filter: "save" },
    { title: "My Posts", filter: "own" },
    { title: "FAQ", filter: "faq" },
  ];

  const handleSelect = (ele: string) => {
    addParam("category", ele, params, router);
    setSelected(ele);
    setOpen(false);
  };

  const handleLowerFilter = (ele: { title: string; filter: string }) => {
    addParam("my", ele.filter, params, router);
    setSelected(ele.title);
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
                    ele.categoryName === selected ||
                      (ele.categoryName === category &&
                        "bg-secondLight text-main"),
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
                    ele.title === selected && "bg-secondLight text-main",
                    ele.filter === my && "bg-secondLight text-main",
                  )}
                  onClick={() => handleLowerFilter(ele)}
                >
                  {ele.title}
                </p>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
