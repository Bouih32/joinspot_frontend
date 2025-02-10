"use client";

import { useState } from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";
import EmptyMessage from "./EmptyMessage";

export default function Notifications() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <MdOutlineNotificationsNone
        className="cursor-pointer"
        onClick={handleOpen}
      />
      {open && (
        <section className="w-[242px]rounded absolute right-0 top-[150%] bg-secondLight p-2 laptop:w-[385px] laptop:p-[18px]">
          <div className="flexBetween laptop:text-12lg border-b border-neutral pb-2 text-10lg text-neutral">
            <h2>Messages</h2>
            <p>View Inbox</p>
          </div>
          <section className="">
            <EmptyMessage />
          </section>
        </section>
      )}
    </div>
  );
}
