"use client";

import { TicketT } from "@/libs/types";
import { useState } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsFillPostcardFill, BsTicketFill } from "react-icons/bs";
import DownloadTicket from "./DownloadTicket";
import { IoIosArrowDown } from "react-icons/io";
import { cn } from "@/libs/utils";

export default function MobileCard({ ele, user }: { ele: TicketT; user: any }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="space-y-5">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flexBetween border-b border-neutralLightActive py-2 text-left text-12sm font-semibold text-neutralDarkHover tablet:hidden"
      >
        <p>{ele.code}</p>

        <div className="flexCenter gap-2.5">
          <DownloadTicket myTicket={ele} user={user} />
          <IoIosArrowDown className={cn(open && "rotate-180 text-main")} />
        </div>
      </div>
      {open && (
        <div className="grid grid-cols-2 gap-y-3 rounded bg-[#F8F8F8] px-2.5 py-2">
          <div className="space-y-2 border-b border-neutralLightActive pb-2 text-left text-14sm font-semibold text-neutral">
            <div className="flex items-center gap-[6px]">
              <BsTicketFill className="text-neutralDark" />
              <p className="text-[12px] font-thin"> Tickets</p>
            </div>

            <p>{ele.quantity} tickets</p>
          </div>
          <div className="space-y-2 border-b border-neutralLightActive pb-2 text-left text-14sm font-semibold text-neutral">
            <div className="flex items-center gap-[6px]">
              <BsFillPostcardFill className="text-neutralDark" />
              <p className="text-[12px] font-thin"> Activity joined</p>
            </div>

            <p>{ele.title}</p>
          </div>

          <div className="space-y-2 text-left text-14sm font-semibold text-neutral">
            <div className="flex items-center gap-[6px]">
              <BiSolidTimeFive className="text-neutralDark" />
              <p className="text-[12px] font-thin"> Activity Date</p>
            </div>

            <p>{ele.date}</p>
          </div>
          <div className="space-y-2 text-left text-14sm font-semibold text-neutral">
            <div className="flex items-center gap-[6px]">
              <AiFillDollarCircle className="text-neutralDark" />
              <p className="text-[12px] font-thin"> Total paid</p>
            </div>

            <p>{ele.totalPaid}</p>
          </div>
        </div>
      )}
    </section>
  );
}
