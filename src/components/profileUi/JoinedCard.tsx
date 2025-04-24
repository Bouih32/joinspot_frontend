"use client";

import { useState } from "react";
import { AiFillDollarCircle, AiOutlineQrcode } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { cn } from "@/libs/utils";
import { joinedT } from "@/libs/types";
import { BsFillPostcardFill, BsTicketFill } from "react-icons/bs";
import { avatarPlaceholder } from "@/libs/constantes";

export default function JoinedCard({ ele }: { ele: joinedT }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="space-y-5">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flexBetween border-b border-neutralLightActive py-2 text-left text-12sm font-semibold text-neutralDarkHover tablet:hidden"
      >
        <div className="flex items-center gap-3 pl-3 text-12lg text-neutral tablet:text-14lg laptop:text-16lg">
          <div
            style={{
              backgroundImage: `url(${ele.avatar ? ele.avatar : avatarPlaceholder})`,
            }}
            className="h-[28px] w-[28px] rounded-full bg-red-300 bg-cover bg-center bg-no-repeat"
          ></div>
          <h3 className="line-clamp-1 w-[120px] overflow-hidden text-ellipsis text-14lg text-neutralDarkHover laptop:text-16lg">
            {ele.userName}
          </h3>
        </div>

        <IoIosArrowDown className={cn(open && "rotate-180 text-main")} />
      </div>
      {open && (
        <div className="grid grid-cols-2 gap-y-3 rounded bg-[#F8F8F8] px-2.5 py-2">
          <div className="space-y-2 border-b border-neutralLightActive pb-2 text-left text-14sm font-semibold text-neutral">
            <div className="flex items-center gap-[6px]">
              <AiOutlineQrcode className="text-neutralDark" />
              <p className="text-[12px] font-thin"> Ticket code </p>
            </div>

            <p>
              {ele.code}{" "}
              <span className="text-[12px] font-light text-neutralHover">
                Clients
              </span>
            </p>
          </div>

          <div className="space-y-2 text-left text-14sm font-semibold text-neutral">
            <div className="flex items-center gap-[6px]">
              <BsFillPostcardFill className="text-neutralDark" />
              <p className="text-[12px] font-thin"> Activity joined</p>
            </div>

            <p>{ele.title}$</p>
          </div>

          <div className="space-y-2 text-left text-14sm font-semibold text-neutral">
            <div className="flex items-center gap-[6px]">
              <BsTicketFill className="text-neutralDark" />
              <p className="text-[12px] font-thin">Places</p>
            </div>

            <p>{ele.quantity}</p>
          </div>
          <div className="space-y-2 text-left text-14sm font-semibold text-neutral">
            <div className="flex items-center gap-[6px]">
              <AiFillDollarCircle className="text-neutralDark" />
              <p className="text-[12px] font-thin"> Total paid</p>
            </div>

            <p>{ele.payed}$</p>
          </div>
        </div>
      )}
    </section>
  );
}
