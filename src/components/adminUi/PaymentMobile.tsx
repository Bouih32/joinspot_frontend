"use client";

import { useState } from "react";

import { IoIosArrowDown, IoMdAlert } from "react-icons/io";
import { cn } from "@/libs/utils";

import { avatarPlaceholder } from "@/libs/constantes";
import Button from "../Button";
import { FaCopy } from "react-icons/fa";
import { Payments } from "@/libs/types";

export default function PaymentMobile({ data }: { data: Payments }) {
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
              backgroundImage: `url(${data.avatar ?? avatarPlaceholder})`,
            }}
            className="h-[28px] w-[28px] rounded-full bg-red-300 bg-cover bg-center bg-no-repeat"
          ></div>
          <p className="line-clamp-1 w-[100px] overflow-hidden text-ellipsis text-nowrap text-14lg text-neutralDarkHover laptop:text-16lg">
            {data.userName}
          </p>
        </div>

        <IoIosArrowDown className={cn(open && "rotate-180 text-main")} />
      </div>
      {open && (
        <div className="grid grid-cols-2 gap-y-3 rounded bg-[#F8F8F8] px-2.5 py-2">
          <div className="flex items-center gap-2 border-b border-neutralLightActive pb-2 text-left text-14sm font-semibold text-neutral">
            <p
              className={cn(
                "line-clamp-1 max-w-[100px] overflow-hidden text-ellipsis",
                !data.rib && "text-error",
              )}
            >
              {data.rib ? data.rib : "no bank data"}
            </p>
            {data.rib ? <FaCopy /> : <IoMdAlert className="text-error" />}
          </div>

          <div className="border-b border-neutralLightActive text-left text-14sm font-semibold text-neutral">
            <p
              className={cn(
                "line-clamp-1 w-[100px] overflow-hidden text-ellipsis",
                !data.rib && "text-error",
              )}
            >
              {data.bankName ? data.bankName : "no bank data"}
            </p>
          </div>
          <div className="text-left text-14sm font-semibold text-neutral">
            {data.revenueAmount}$
          </div>

          <div className="flex items-end">
            <Button classname="bg-success">Pay</Button>
          </div>
        </div>
      )}
    </section>
  );
}
