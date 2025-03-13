"use client";

import placeholder from "../../../public/images/avatar.png";
import Image from "next/image";
import { RiVipCrown2Fill, RiSettings3Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";
import ProfileCard from "./ProfileCard";
import { nanoid } from "nanoid";
import { logout } from "@/actions/logout";
import { useRouter } from "next/navigation";
import { DropProps } from "./Messages";

export default function ProfileNav({
  open,
  handleOpen,
  handleClose,
  avatar,
}: DropProps) {
  const router = useRouter();

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
        onClick={() => {
          handleOpen && handleOpen("profile");
        }}
        width={40}
        height={40}
        src={avatar ? avatar : placeholder}
        alt="avatar"
        className="h-[25px] w-[25px] cursor-pointer rounded-full object-cover tablet:h-[40px] tablet:w-[40px]"
      />

      {open === "profile" && (
        <>
          <div
            className="fixed bottom-0 left-0 right-0 top-[40px] z-40 bg-transparent tablet:top-[60px]"
            onClick={handleClose}
          ></div>

          <section
            className="absolute right-0 top-[115%] z-[600] w-[143px] space-y-2.5 rounded bg-secondLight p-3 laptop:w-[159px] laptop:p-4"
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
