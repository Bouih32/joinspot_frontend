"use client";
import MobileNav from "./MobileNav";
import Notifications from "./Notifications";
import Messages from "./Messages";
import ProfileNav from "./ProfileNav";
import { useState } from "react";

export default function LogedUi() {
  const [open, setOpen] = useState<
    "notifications" | "messages" | "profile" | "nav" | null
  >(null);

  const handleOpen = (
    ele: "notifications" | "messages" | "profile" | "nav",
  ) => {
    setOpen(null);
    setOpen(ele);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <div className="flexCenter gap-2 text-[24px] text-main tablet:gap-4 tablet:text-darker">
      <Messages open={open} handleOpen={handleOpen} handleClose={handleClose} />
      <Notifications
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <ProfileNav
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <MobileNav
        user
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </div>
  );
}
