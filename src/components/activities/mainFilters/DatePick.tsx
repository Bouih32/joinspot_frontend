import React from "react";
import { IoToday } from "react-icons/io5";

type DatePickProps = {
  day: string;
  handleOpen: () => void;
};

export default function DatePick({ day, handleOpen }: DatePickProps) {
  return (
    <div
      className="flexBetween w-full cursor-pointer rounded bg-secondLight px-3 py-2.5 tablet:w-[196px]"
      onClick={handleOpen}
    >
      <p className="text-16lg text-second">{day}</p>
      <IoToday className="text-main" />
    </div>
  );
}
