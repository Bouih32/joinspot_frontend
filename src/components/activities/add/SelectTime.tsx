"use client";

import { cn } from "@/libs/utils";
import { useState } from "react";
import { BiSolidTime } from "react-icons/bi";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

type SelectTimeProps = {
  error?: string;
  placeholder: string;
  handleSelect: (time: string) => void;
};

export default function SelectTime({
  error,
  placeholder,
  handleSelect,
}: SelectTimeProps) {
  const [open, setOpen] = useState(false);
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const handleHour = (type: string) => {
    if (type === "add") {
      hour < 24 ? setHour((prev) => prev + 1) : null;
    }
    if (type === "minus") {
      hour > 0 ? setHour((prev) => prev - 1) : null;
    }
  };

  const handleMinutes = (type: string) => {
    if (type === "add") {
      minutes < 60 ? setMinutes((prev) => prev + 1) : null;
    }
    if (type === "minus") {
      minutes > 0 ? setMinutes((prev) => prev - 1) : null;
    }
  };

  const handleClear = () => {
    setHour(0);
    setMinutes(0);
  };

  const handleApply = () => {
    const selectHour = hour < 10 ? `0${hour}` : hour;
    const selectminutes = minutes < 10 ? `0${minutes}` : minutes;
    const time = `${selectHour}:${selectminutes}`;
    setSelected(time);
    handleSelect(time);
  };

  return (
    <div className="relative w-full space-y-1">
      <div
        className={cn(
          "flexBetween h-[30px] w-full cursor-pointer gap-2 rounded border border-secondLightActive px-2 py-[3px] font-openSans text-[12px] leading-[24px] text-secondDark",
          error && "border-error text-error",
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        <p className={cn("text-14sm caret-main", error && "text-error")}>
          {selected ? selected : placeholder}
        </p>

        <BiSolidTime className="text-[18px]" />
      </div>
      {open && (
        <>
          <div
            className="fixed inset-0 z-50 cursor-pointer bg-transparent"
            onClick={() => setOpen(false)}
          ></div>
          <div className="absolute right-0 top-[120%] z-50 w-[137px] space-y-2 rounded bg-white p-2 text-10lg text-second shadow-22xl tablet:w-full tablet:text-14lg">
            <p className="text-main">Enter Time</p>
            <div className="flexCenter gap-[6px]">
              <div className="flexCenter flex-col">
                <RiArrowUpSFill
                  onClick={() => handleHour("add")}
                  className="cursor-pointer hover:text-main"
                />
                <div className="grid h-[30px] w-[30px] place-content-center rounded-[2px] border border-secondLightActive bg-secondLight text-main">
                  {hour < 10 ? "0" : null}
                  {hour}
                </div>
                <RiArrowDownSFill
                  className="cursor-pointer hover:text-main"
                  onClick={() => handleHour("minus")}
                />
              </div>
              <span>:</span>
              <div className="flexCenter flex-col">
                <RiArrowUpSFill
                  className="cursor-pointer hover:text-main"
                  onClick={() => handleMinutes("add")}
                />
                <div className="grid h-[30px] w-[30px] place-content-center rounded-[2px] border border-secondLightActive bg-secondLight text-main">
                  {minutes < 10 ? "0" : null}
                  {minutes}
                </div>
                <RiArrowDownSFill
                  className="cursor-pointer hover:text-main"
                  onClick={() => handleMinutes("minus")}
                />
              </div>
            </div>
            <div className="flexBetween border-t border-secondLightHover pt-1">
              <span className="cursor-pointer" onClick={handleClear}>
                Clear
              </span>
              <span className="cursor-pointer text-main" onClick={handleApply}>
                Apply
              </span>
            </div>
          </div>
        </>
      )}
      {error ? (
        <p className="text-[9px] leading-3 text-error">{error}</p>
      ) : null}
    </div>
  );
}
