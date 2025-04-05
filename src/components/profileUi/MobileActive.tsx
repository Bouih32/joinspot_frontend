"use client";

import { useState } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiSolidTimeFive } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { cn, formatDate } from "@/libs/utils";
import { activeT } from "@/app/(profile)/user/active/page";
import { PiUsersFill } from "react-icons/pi";

export default function MobileActive({ ele }: { ele: activeT }) {
  const [open, setOpen] = useState(false);
  const date = formatDate(ele.endDay).split(".");
  return (
    <section className="space-y-5">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flexBetween border-b border-neutralLightActive py-2 text-left text-12sm font-semibold text-neutralDarkHover tablet:hidden"
      >
        <p>{ele.title}</p>

        <IoIosArrowDown className={cn(open && "rotate-180 text-main")} />
      </div>
      {open && (
        <div className="grid grid-cols-2 gap-y-3 rounded bg-[#F8F8F8] px-2.5 py-2">
          <div className="space-y-2 border-b border-neutralLightActive pb-2 text-left text-14sm font-semibold text-neutral">
            <div className="flex items-center gap-[6px]">
              <PiUsersFill className="text-neutralDark" />
              <p className="text-[12px] font-thin"> People joined </p>
            </div>

            <p>
              {ele.totalTickets}{" "}
              <span className="text-[12px] font-light text-neutralHover">
                Clients
              </span>
            </p>
          </div>

          <div className="space-y-2 text-left text-14sm font-semibold text-neutral">
            <div className="flex items-center gap-[6px]">
              <BiSolidTimeFive className="text-neutralDark" />
              <p className="text-[12px] font-thin">Finished at</p>
            </div>

            <p>
              {date[1]}{" "}
              <span className="text-[12px] font-light text-neutralHover">
                {date[0]}
              </span>
            </p>
          </div>
          <div className="space-y-2 text-left text-14sm font-semibold text-neutral">
            <div className="flex items-center gap-[6px]">
              <AiFillDollarCircle className="text-neutralDark" />
              <p className="text-[12px] font-thin"> Total gain</p>
            </div>

            <p>{ele.totalRevenue}</p>
          </div>
        </div>
      )}
    </section>
  );
}
