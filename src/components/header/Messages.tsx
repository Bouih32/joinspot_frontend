"use client";

import { useContext, useState } from "react";
import { MdOutlineMail, MdOutlineNotificationsNone } from "react-icons/md";
import EmptyMessage from "./EmptyMessage";
import NotificationNumber from "./NotificationNumber";
import { cn } from "@/libs/utils";
import { NavContext } from "@/contexts/NavigationContext";

export default function Messages() {
  const context = useContext(NavContext);
  if (!context) return;
  const { handleClose, handleOpen, open } = context;
  return (
    <div className="relative">
      <div className="relative z-[600]">
        <MdOutlineMail
          className={cn(
            "cursor-pointer hover:text-main",
            open === "messages" && "text-main",
          )}
          onClick={() => {
            handleOpen && handleOpen("messages");
          }}
        />
        <NotificationNumber>1</NotificationNumber>
      </div>

      {open === "messages" && (
        <>
          <div
            className="fixed inset-0 z-40 bg-transparent"
            onClick={handleClose}
          ></div>

          <section
            className="absolute right-0 top-[150%] z-50 w-[242px] rounded bg-secondLight p-2 laptop:w-[385px] laptop:p-[18px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flexBetween border-b border-neutral pb-2 text-10lg text-neutral laptop:text-12lg">
              <h2>Messages</h2>
              <p className="text-main">View Inbox</p>
            </div>
            <section>
              <EmptyMessage message />
            </section>
          </section>
        </>
      )}
    </div>
  );
}
