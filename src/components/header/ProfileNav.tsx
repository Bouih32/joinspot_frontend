"use client";

import { useState } from "react";
import avatar from "../../../public/images/avatar.png";
import Image from "next/image";
import { RiVipCrown2Fill, RiSettings3Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

import { LuLogOut } from "react-icons/lu";
import ProfileCard from "./ProfileCard";
import { nanoid } from "nanoid";
import { logout } from "@/actions/logout";
import { useRouter } from "next/navigation";

export default function ProfileNav() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogOut = async () => {
    await logout();
    router.push("/login");
  };

  const dropNav = [
    { icon: <RiVipCrown2Fill />, title: "Upgrade Pro", href: "/update" },
    { icon: <CgProfile />, title: "Profile", href: "/profile" },
    { icon: <RiSettings3Line />, title: "Settings", href: "/settings" },
  ];

  return (
    <div className="relative">
      <Image
        onClick={handleOpen}
        src={avatar}
        alt="avatar"
        className="h-[25px] w-[25px] cursor-pointer rounded-full object-contain tablet:h-[45px] tablet:w-[45px]"
      />

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-transparent"
            onClick={handleClose}
          ></div>

          <section
            className="absolute right-0 top-[115%] z-50 w-[143px] space-y-2.5 rounded bg-secondLight p-3 laptop:w-[159px] laptop:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {dropNav.map((ele, index) => (
              <ProfileCard
                href={ele.href}
                icon={ele.icon}
                title={ele.title}
                index={index}
                key={nanoid()}
              />
            ))}
            <div
              onClick={handleLogOut}
              className="flex cursor-pointer items-center gap-1 border-t border-neutralLightHover pt-2.5 text-neutral"
            >
              <LuLogOut />
              <h2 className="text-10lg laptop:text-12lg">Log out</h2>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
