"use client";

import { cn } from "@/libs/utils";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Calender from "../mainFilters/Calender";
import { BsFillCalendarDateFill } from "react-icons/bs";

type SelectDayProps = {
  addDay: (days: string[]) => void;
  error: string;
};
export default function SelectDay({ addDay, error }: SelectDayProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const handleClose = (dates: string[]) => {
    addDay(dates);
    setSelected(dates);
    setOpen(false);
  };

  return (
    <div className="relative space-y-1">
      <div
        className={cn(
          "flexBetween h-[30px] w-full cursor-pointer rounded border border-secondLightActive px-2 py-[3px] font-openSans text-[14px] leading-[24px] text-secondDark",
          error && "border-error",
        )}
      >
        {selected.length > 0 ? (
          <p className="font-semibold text-main">
            {selected[0]} - {selected[1]}
          </p>
        ) : (
          <p>Activity date</p>
        )}
        <div
          className={cn("flexCenter gap-1", open && "text-main")}
          onClick={() => setOpen((prev) => !prev)}
        >
          <BsFillCalendarDateFill />
          {open ? (
            <IoIosArrowUp className="hover:text-main" />
          ) : (
            <IoIosArrowDown className="hover:text-main" />
          )}
        </div>
      </div>

      {open && (
        <div className="absolute right-0 top-[130%] z-[500]">
          <Calender handleClose={handleClose} add />
        </div>
      )}
    </div>
  );
}
