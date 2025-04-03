"use client";

import { useContext, useState } from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";
import NotificationCard from "./NotificationCard";
import NotificationNumber from "./NotificationNumber";
import { cn } from "@/libs/utils";
import { NavContext } from "@/contexts/NavigationContext";
import EmptyMessage from "./EmptyMessage";

export default function Notifications() {
  const context = useContext(NavContext);
  if (!context) return;
  const { handleClose, handleOpen, open } = context;
  return (
    <div className="relative">
      <div className="relative z-[600]">
        <MdOutlineNotificationsNone
          className={cn(
            "cursor-pointer hover:text-main",
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
            className="fixed inset-0 z-40 bg-transparent"
            onClick={handleClose}
          ></div>

          <section
            className="absolute right-0 top-[150%] z-[600] w-[242px] space-y-[6px] rounded bg-secondLight p-2 shadow-23xl laptop:w-[385px] laptop:space-y-[14px] laptop:p-[18px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flexBetween border-b border-neutral pb-2 text-10lg text-neutral laptop:text-12lg">
              <h2>Notifications</h2>
              <p className="text-main">Notification Settings</p>
            </div>
            <section className="space-y-1">
              <EmptyMessage />
              {/* <NotificationCard />
              <NotificationCard />
              <NotificationCard /> */}
            </section>
          </section>
        </>
      )}
    </div>
  );
}
