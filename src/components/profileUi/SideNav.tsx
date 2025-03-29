"use client";

import { cn } from "@/libs/utils";
import { BsFillTicketFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import NavLink from "./NavLink";
import { nanoid } from "nanoid";
import { LuLogOut } from "react-icons/lu";
import { logout } from "@/actions/logout";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathName = usePathname();
  const navContent = [
    { icon: <FaUserCircle />, link: "/user", title: "profile" },
    {
      icon: <MdOutlineMailOutline />,
      link: "/user/messages",
      title: "messages",
    },
    { icon: <BsFillTicketFill />, link: "/user/tickets", title: "My tickets" },
    { icon: <IoSettings />, link: "/user/settings", title: "Settings" },
  ];

  const handleLogOut = async () => {
    await logout();
  };
  return (
    <aside className="flex h-fit w-full justify-between border-b border-neutralLightActive pt-3 tablet:w-[213px] tablet:flex-col tablet:gap-2.5 tablet:border-b-0 tablet:border-r tablet:pr-2.5 tablet:pt-5 laptop:w-[306px]">
      {navContent.map((ele) => (
        <NavLink
          key={nanoid()}
          link={ele.link}
          icon={ele.icon}
          title={ele.title}
          pathName={pathName}
        />
      ))}
      <div
        onClick={handleLogOut}
        className={cn(
          "flex w-fit cursor-pointer items-center gap-2 px-5 py-[17px] text-16xxl text-neutralDarkHover transition-all duration-75 hover:bg-main hover:text-white tablet:w-full tablet:rounded-[8px] tablet:border-b-0",
        )}
      >
        <div className="text-[18px] tablet:text-[24px]">
          <LuLogOut />
        </div>
        <p className="hidden first-letter:uppercase tablet:block">Log out</p>
      </div>
    </aside>
  );
}
