"use client";

import { TicketT } from "@/libs/types";
import { cn } from "@/libs/utils";
import { nanoid } from "nanoid";
import { useState } from "react";
import { AiFillDollarCircle, AiOutlineQrcode } from "react-icons/ai";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsFillPostcardFill, BsTicketFill } from "react-icons/bs";
import { IoIosArrowDown, IoMdDownload } from "react-icons/io";

export default function MobileTickets({ tickets }: { tickets: TicketT[] }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="tablet:hidden">
      <div className="mb-3 flex items-center gap-[6px] border-b border-neutralLightActive py-2 text-left text-12sm font-semibold text-neutral">
        <AiOutlineQrcode />
        Ticket code
      </div>

      <section className="space-y-2">
        {tickets.map((ele) => (
          <section key={nanoid()} className="space-y-5">
            <div
              onClick={() => setOpen((prev) => !prev)}
              className="flexBetween border-b border-neutralLightActive py-2 text-left text-12sm font-semibold text-neutralDarkHover tablet:hidden"
            >
              <p>{ele.code}</p>

              <div className="flexCenter gap-2.5">
                <IoMdDownload className="cursor-pointer hover:text-main" />
                <IoIosArrowDown
                  className={cn(open && "rotate-180 text-main")}
                />
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
        ))}
      </section>

      {/* <section className="space-y-5">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="flexBetween border-b border-neutralLightActive py-2 text-left text-12sm font-semibold text-neutralDarkHover tablet:hidden"
        >
          <p>12Q7u22Sa10</p>

          <div className="flexCenter gap-2.5">
            <IoMdDownload className="cursor-pointer hover:text-main" />
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

              <p>2 tickets</p>
            </div>
            <div className="space-y-2 border-b border-neutralLightActive pb-2 text-left text-14sm font-semibold text-neutral">
              <div className="flex items-center gap-[6px]">
                <BsFillPostcardFill className="text-neutralDark" />
                <p className="text-[12px] font-thin"> Tickets</p>
              </div>

              <p>2 tickets</p>
            </div>

            <div className="space-y-2 text-left text-14sm font-semibold text-neutral">
              <div className="flex items-center gap-[6px]">
                <BiSolidTimeFive className="text-neutralDark" />
                <p className="text-[12px] font-thin"> Tickets</p>
              </div>

              <p>2 tickets</p>
            </div>
            <div className="space-y-2 text-left text-14sm font-semibold text-neutral">
              <div className="flex items-center gap-[6px]">
                <AiFillDollarCircle className="text-neutralDark" />
                <p className="text-[12px] font-thin"> Tickets</p>
              </div>

              <p>2 tickets</p>
            </div>
          </div>
        )}
      </section> */}
    </section>
  );
}
