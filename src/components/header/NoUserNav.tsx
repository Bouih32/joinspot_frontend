"use client";

import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import Nav from "./Nav";
import Link from "next/link";
import Button from "../Button";
import { HiMenuAlt3 } from "react-icons/hi";
import { logo, navLinks } from "@/libs/constantes";
import { useState } from "react";

export default function NoUserNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <HiMenuAlt3
        className="text-[22px] text-main tablet:hidden"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      />

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-transparent"
            onClick={() => setOpen(false)}
          ></div>
          <section
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 top-0 z-50 block h-screen w-[274px] bg-secondLightHover bg-mobileNavBg bg-[length:65%_100%] bg-right bg-no-repeat px-4 pt-[48px] tablet:hidden"
          >
            <div className="flexBetween">
              <Image
                src={logo}
                alt="logo"
                height={26.5}
                width={156}
                className="h-[26.491px] w-[156px] object-contain"
              />
              <RxCross2
                className="text-[24px] text-mainLightActive"
                onClick={() => setOpen(false)}
              />
            </div>

            <div className="mt-4 flex items-center gap-2">
              <Link href="/signup">
                <Button variant>Sign Up</Button>
              </Link>
              <Link href="/login">
                <Button>Login</Button>
              </Link>
            </div>

            <Nav classname="mt-6 text-darker" navInfo={navLinks} />
          </section>
        </>
      )}
    </>
  );
}
