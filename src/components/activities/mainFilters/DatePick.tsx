import React from "react";
import { IoToday } from "react-icons/io5";

export default function DatePick() {
  return (
    <div className="flexBetween w-[203px] rounded bg-secondLight px-3 py-2.5 tablet:w-[196px]">
      <p className="text-16lg text-second">09/03/2025</p>
      <IoToday className="text-main" />
    </div>
  );
}
