"use client";

import { nanoid } from "nanoid";
import { useState } from "react";
import { CgAdd } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function SelectTag() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[] | null>(null);
  const data = ["sleepng", "running", "swiming", "eating"];

  const handleAdd = () => {};
  return (
    <div
      className="relative space-y-1"
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="flexBetween h-[30px] w-full cursor-pointer gap-3 rounded border border-secondLightActive px-2 py-[3px] font-openSans text-[14px] leading-[24px] text-secondDark">
        <p>Select tags</p>
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
              key={nanoid()}
              className="flex cursor-pointer items-center gap-[9px] rounded-[2px] p-[9px] text-center text-14sm text-neutralHover hover:bg-[#F8F8F8]"
            >
              <CgAdd className="text-[20px]" />
              <p>sport</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
