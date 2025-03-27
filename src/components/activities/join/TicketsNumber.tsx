"use client";

import { JoinContextP } from "@/contexts/JoinContext";
import { getContext } from "@/libs/utils";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SummaryProps } from "./Summary";

export default function TicketsNumber({ handleQuantity }: SummaryProps) {
  const { count, handleArrows } = getContext(JoinContextP);

  return (
    <div className="select-none space-y-1 text-14xxl">
      <p className="text-second">Number of Participants</p>
      <div className="flexBetween rounded border border-secondLightActive px-3 py-2 text-main">
        <span>{count}</span>
        <div className="text-[10px]">
          <IoIosArrowUp
            className="cursor-pointer"
            onClick={() => {
              handleQuantity(count + 1);
              handleArrows("add");
            }}
          />
          <IoIosArrowDown
            className="cursor-pointer"
            onClick={() => {
              handleQuantity(count - 1);
              handleArrows("minus");
            }}
          />
        </div>
      </div>
    </div>
  );
}
