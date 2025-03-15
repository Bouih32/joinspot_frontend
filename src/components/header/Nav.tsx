"use client";

import { NavContext } from "@/contexts/NavigationContext";
import { cn } from "@/libs/utils";
import { nanoid } from "nanoid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

type NavProps = {
  classname?: string;
  footer?: boolean;
  navInfo: {
    name: string;
    href: string;
  }[];
};

export default function Nav({ classname, footer, navInfo }: NavProps) {
  const context = useContext(NavContext);
  if (!context) return;
  const { handleClose } = context;
  const pathname = usePathname();
  return (
    <nav className={cn(classname)}>
      <ul
        className={cn(
          "tablet:flexCenter relative z-[500] flex flex-col gap-3 text-14sm tablet:flex-row tablet:gap-[15px] laptop:gap-5 laptop:text-16sm",
          footer && "text-start tablet:flex-col tablet:items-start",
        )}
      >
        {navInfo.map((ele) => (
          <Link
            key={nanoid()}
            href={ele.href}
            onClick={() => handleClose && handleClose()}
          >
            <li
              className={cn(
                "z-[600] hover:text-main",
                ele.href === pathname && "font-medium text-main",
              )}
            >
              {ele.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
