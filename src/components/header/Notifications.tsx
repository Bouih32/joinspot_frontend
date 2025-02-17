"use client";

import { useState } from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";
import NotificationCard from "./NotificationCard";
import NotificationNumber from "./NotificationNumber";
import { cn } from "@/libs/utils";
import { DropProps } from "./Messages";

export default function Notifications({
  open,
  handleOpen,
  handleClose,
}: DropProps) {
  return (
    <div className="relative">
      <div className="relative">
        <MdOutlineNotificationsNone
          className={cn(
            "cursor-pointer",
            open === "notifications" && "text-main",
          )}
          onClick={() => {
            handleOpen && handleOpen("notifications");
          }}
        />
        <NotificationNumber notification>1</NotificationNumber>
      </div>

      {open === "notifications" && (
        <>
          <div
            className="fixed bottom-0 left-0 right-0 top-[40px] z-40 bg-transparent tablet:top-[60px]"
            onClick={handleClose}
          ></div>

          <section
            className="absolute right-0 top-[150%] z-50 w-[242px] space-y-[6px] rounded bg-secondLight p-2 laptop:w-[385px] laptop:space-y-[14px] laptop:p-[18px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flexBetween border-b border-neutral pb-2 text-10lg text-neutral laptop:text-12lg">
              <h2>Notifications</h2>
              <p className="text-main">Notification Settings</p>
            </div>
            <section className="space-y-1">
              {/* <EmptyMessage /> */}
              <NotificationCard />
              <NotificationCard />
              <NotificationCard />
            </section>
          </section>
        </>
      )}
    </div>
  );
}
