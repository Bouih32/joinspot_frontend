import React from "react";
import { IoToday } from "react-icons/io5";

type DatePickProps = {
  day: string[] | null;
  handleOpen: () => void;
};

export default function DatePick({ day, handleOpen }: DatePickProps) {
  return (
    <div
      className="flexBetween w-full cursor-pointer rounded bg-secondLight px-3 py-2.5"
      onClick={handleOpen}
    >
      <p className="text-14sm text-second tablet:text-16sm">
        {day ? `${day[0]} - ${day[1]}` : "Select End Day"}
      </p>
      <IoToday className="text-main" />
    </div>
  );
}
