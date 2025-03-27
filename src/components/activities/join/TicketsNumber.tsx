"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function TicketsNumber() {
  const [count, setCount] = useState(0);

  const handleArrows = (action: "add" | "minus") => {
    action === "add"
      ? setCount((prev) => prev + 1)
      : setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  return (
    <div className="select-none space-y-1 text-14xxl">
      <p className="text-second">Number of Participants</p>
      <div className="flexBetween rounded border border-secondLightActive px-3 py-2 text-main">
        <span>{count}</span>
        <div className="text-[10px]">
          <IoIosArrowUp
            className="cursor-pointer"
            onClick={() => handleArrows("add")}
          />
          <IoIosArrowDown
            className="cursor-pointer"
            onClick={() => handleArrows("minus")}
          />
        </div>
      </div>
    </div>
  );
}
