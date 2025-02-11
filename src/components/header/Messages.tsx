"use client";

import { useState } from "react";
import { MdOutlineMail, MdOutlineNotificationsNone } from "react-icons/md";
import EmptyMessage from "./EmptyMessage";

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
        <MdOutlineMail className="cursor-pointer" onClick={handleOpen} />
        <span className="flexCenter absolute -top-[50%] right-[50%] h-[11px] w-[11px] translate-x-full translate-y-[50%] rounded-full bg-error text-[7px] font-bold text-white tablet:h-[15px] tablet:w-[15px] tablet:text-[8px]">
          1
        </span>
      </div>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-transparent"
            onClick={handleClose}
          ></div>

          <section
            className="absolute right-0 top-[150%] z-50 w-[242px] rounded bg-secondLight p-2 laptop:w-[385px] laptop:p-[18px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flexBetween laptop:text-12lg border-b border-neutral pb-2 text-10lg text-neutral">
              <h2>Messages</h2>
              <p>View Inbox</p>
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
