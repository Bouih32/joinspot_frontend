"use client";

import { useState } from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";
import EmptyMessage from "./EmptyMessage";
import NotificationCard from "./NotificationCard";
import NotificationNumber from "./NotificationNumber";

export default function Notifications() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="relative">
      <div className="relative">
        <MdOutlineNotificationsNone
          className="cursor-pointer"
          onClick={handleOpen}
        />
        <NotificationNumber notification>1</NotificationNumber>
      </div>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-transparent"
            onClick={handleClose}
          ></div>

          <section
            className="absolute right-0 top-[150%] z-50 w-[242px] space-y-[6px] rounded bg-secondLight p-2 laptop:w-[385px] laptop:space-y-[14px] laptop:p-[18px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flexBetween border-b border-neutral pb-2 text-10lg text-neutral laptop:text-12lg">
              <h2>Notifications</h2>
              <p>Notification Settings</p>
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
