import { cn } from "@/libs/utils";
import Link from "next/link";
import React, { ReactElement } from "react";

type NavLinkProps = {
  icon: ReactElement;
  link: string;
  title: string;
  pathName: string;
};

export default function NavLink({ icon, link, title, pathName }: NavLinkProps) {
  return (
    <Link
      href={link}
      className={cn(
        "flex w-fit cursor-pointer items-center gap-2 border-main px-5 py-[17px] text-16xxl text-neutralDarkHover transition-all duration-75 hover:bg-main hover:text-white tablet:w-full tablet:rounded-[8px] tablet:border-b-0",
        pathName === link &&
          "border-b-[2px] text-main tablet:bg-main tablet:text-white",
      )}
    >
      <div className="text-[18px] tablet:text-[24px]">{icon}</div>
      <p className="hidden first-letter:uppercase tablet:block">{title}</p>
    </Link>
  );
}
