"use client";

import React, { useState } from "react";
import Button from "../Button";
import { IoIosArrowDown } from "react-icons/io";
import { cn } from "@/libs/utils";
import { degreeT } from "@/libs/types";
import JustificationUi from "./JustificationUi";
import DegreeUi from "./DegreeUi";
import RejectRequest from "./RejectRequest";
import AcceptRequest from "./AcceptRequest";
import { avatarPlaceholder } from "@/libs/constantes";

export default function ConfirmCard({ data }: { data: degreeT }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="space-y-3 rounded-[8px] bg-[#F8F8F8] px-3 py-3 tablet:py-2">
      <div className="flexBetween flex-col gap-7 tablet:flex-row">
        <div className="flex flex-1 items-center gap-3 text-12lg text-neutral tablet:text-14lg laptop:text-16lg">
          <div
            style={{
              backgroundImage: `url(${data.user.avatar ?? avatarPlaceholder})`,
            }}
            className="h-[24px] w-[24px] rounded-full bg-red-300 bg-cover bg-center bg-no-repeat"
          ></div>
          <p className="overflow-hidden text-nowrap text-12lg text-neutralDarkHover laptop:text-16lg">
            {data.user.userName} requests to be an organizer in{" "}
            <span className="font-semibold text-main first-letter:uppercase">
              {data.user.category.categoryName}
            </span>
          </p>
        </div>
        <div className="flexCenter gap-2.5 self-end">
          <RejectRequest id={data.user.userId} degreeId={data.degreeId} />

          <AcceptRequest id={data.user.userId} degreeId={data.degreeId} />
          <div onClick={() => setOpen((prev) => !prev)}>
            <Button
              icon={
                <IoIosArrowDown
                  className={cn(
                    open && "rotate-180 transition-all duration-75",
                  )}
                />
              }
              classname={cn(
                "bg-white flex-row-reverse items-center tablet:items-center text-neutralDarkHover tablet:px-2 tablet:py-1 px-2 py-1 ",
                open && "bg-main text-white",
              )}
            >
              Infos
            </Button>
          </div>
        </div>
      </div>
      {open && (
        <section className="space-y-6 rounded-[6px] bg-white px-3 py-[18px] tablet:rounded-[8px] tablet:p-4">
          {data.justification ? (
            <JustificationUi
              justification={data.justification}
              justificationPic={data.justificationPic}
            />
          ) : (
            <DegreeUi data={data} />
          )}
        </section>
      )}
    </section>
  );
}
