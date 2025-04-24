"use client";

import { useState } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiSolidTimeFive } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { cn, formatDate } from "@/libs/utils";
import { PiUsersFill } from "react-icons/pi";
import { activeT } from "@/app/(profile)/admin/activities/page";
import BanActivity from "./BanActivity";
import UnBanActivity from "./UnbanActivity";
import { avatarPlaceholder } from "@/libs/constantes";
import Button from "../Button";
import { FaCopy } from "react-icons/fa";

export default function PaymentMobile() {
  const [open, setOpen] = useState(false);

  return (
    <section className="space-y-5">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flexBetween border-b border-neutralLightActive py-2 text-left text-12sm font-semibold text-neutralDarkHover tablet:hidden"
      >
        <div className="flex flex-1 items-center gap-3 text-12lg text-neutral tablet:text-14lg laptop:text-16lg">
          <div
            style={{
              backgroundImage: `url(${avatarPlaceholder})`,
            }}
            className="h-[28px] w-[28px] rounded-full bg-red-300 bg-cover bg-center bg-no-repeat"
          ></div>
          <p className="line-clamp-1 w-[100px] overflow-hidden text-nowrap text-14lg text-neutralDarkHover laptop:text-16lg">
            othmane
          </p>
        </div>

        <IoIosArrowDown className={cn(open && "rotate-180 text-main")} />
      </div>
      {open && (
        <div className="grid grid-cols-2 gap-y-3 rounded bg-[#F8F8F8] px-2.5 py-2">
          <div className="flex items-center gap-2 space-y-2 border-b border-neutralLightActive pb-2 text-left text-14sm font-semibold text-neutral">
            <p className="line-clamp-1 w-[100px] overflow-hidden">
              10034500065...
            </p>
            <FaCopy />
          </div>

          <div className="space-y-2 border-b border-neutralLightActive text-left text-14sm font-semibold text-neutral">
            <p>CIH Bank</p>
          </div>
          <div className="space-y-2 text-left text-14sm font-semibold text-neutral">
            <p>300%</p>
          </div>

          <div className="flex items-end">
            <Button>Pay</Button>
          </div>
        </div>
      )}
    </section>
  );
}
