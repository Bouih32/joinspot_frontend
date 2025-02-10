"use client";

import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { RxCross2 } from "react-icons/rx";
import Nav from "./Nav";
import Link from "next/link";
import Button from "../Button";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

type MobileNavProps = {
  user?: boolean;
};

export default function MobileNav({ user }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <HiMenuAlt3
        className="text-[22px] text-main tablet:hidden"
        onClick={handleOpen}
      />
      {open && (
        <section className="absolute right-0 top-0 block h-screen w-[274px] bg-secondLightHover px-4 pt-[48px] tablet:hidden">
          <div className="flexBetween">
            <Image
              src={logo}
              alt="logo"
              className="h-[26.491px] w-[156px] object-contain"
            />
            <RxCross2
              className="text-[24px] text-mainLightActive"
              onClick={handleOpen}
            />
          </div>
          {!user && (
            <div className="mt-4 flex items-center gap-2">
              <Link href="/signup">
                <Button variant>Sign Up</Button>
              </Link>
              <Link href="/login">
                <Button>Login</Button>
              </Link>
            </div>
          )}
          <Nav classname="mt-6 text-darker" />
        </section>
      )}
    </>
  );
}
