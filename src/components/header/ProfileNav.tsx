"use client";

import placeholder from "../../../public/images/avatar.png";
import Image from "next/image";
import { RiVipCrown2Fill, RiSettings3Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";
import ProfileCard from "./ProfileCard";
import { nanoid } from "nanoid";
import { logout } from "@/actions/logout";
import { useContext } from "react";
import { NavContext } from "@/contexts/NavigationContext";
import { LogedUiProps } from "./LogedUi";
import Link from "next/link";

export default function ProfileNav({ avatar, isLogged }: LogedUiProps) {
  const handleLogOut = async () => {
    await logout();
  };

  const role =
    typeof isLogged !== "string" && isLogged?.role ? isLogged.role : undefined;

  const dropNav = [
    { icon: <CgProfile />, title: "Profile", href: "/user" },
    {
      icon: <RiSettings3Line />,
      title: "Settings",
      href: "/user/settings",
    },
  ];

  const context = useContext(NavContext);
  if (!context) return;
  const { handleClose, handleOpen, open } = context;

  return (
    <div className="relative">
      <Image
        onClick={() => {
          handleOpen && handleOpen("profile");
        }}
        width={40}
        height={40}
        src={avatar ? avatar : placeholder}
        alt="avatar"
        className="relative z-[500] h-[25px] w-[25px] cursor-pointer rounded-full object-cover tablet:h-[40px] tablet:w-[40px]"
      />

      {open === "profile" && (
        <>
          <div
            className="fixed inset-0 z-30 bg-transparent"
            onClick={handleClose}
          ></div>

          <section
            className="absolute right-0 top-[115%] z-[600] w-[143px] space-y-2.5 rounded bg-secondLight p-3 shadow-23xl laptop:w-[159px] laptop:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {role === "VISITOR" && (
              <Link
                href="/upgrade"
                className="flex cursor-pointer items-center gap-1 pb-3 text-neutral"
              >
                <RiVipCrown2Fill />
                <h2 className="text-10lg laptop:text-12lg">Upgrade Pro</h2>
              </Link>
            )}

            {dropNav.map((ele) => (
              <ProfileCard
                href={ele.href}
                icon={ele.icon}
                title={ele.title}
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
