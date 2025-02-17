import { cn } from "@/libs/utils";
import Image from "next/image";
import { ReactNode } from "react";
import logo from "../../../public/images/logoWhite.png";
import AuthHeaders from "./AuthHeaders";

type WrapperProps = {
  children: ReactNode;
  signup?: boolean;
  reverse?: boolean;
  classname: string;
  title: string;
};

export default function AuthWrapper({
  children,
  reverse,
  signup,
  title,
  classname,
}: WrapperProps) {
  return (
    <main
      className={cn(
        "flex h-screen flex-col gap-[30px] tablet:flex-row tablet:gap-0",
        reverse && "tablet:flex-row-reverse",
      )}
    >
      <section
        className={cn(
          "relative flex min-h-[284px] flex-col justify-between px-4 py-[29px] pb-[64px] font-poppins text-white tablet:w-[504px] tablet:px-[50px] tablet:py-[78px] laptop:px-20 laptop:py-[61px] xl:w-[712px]",
          classname,
        )}
      >
        <AuthHeaders title={title} mobile signup={signup} />

        <Image
          src={logo}
          alt="logo"
          className={cn(
            "h-[32px] w-[166px] object-cover tablet:w-[195px] laptop:h-[72px] laptop:w-[217px]",
            reverse && "tablet:self-end",
          )}
        />
        {signup ? (
          <p
            className={cn(
              "self-end text-22xl tablet:self-start tablet:text-40xl xl:text-56xl",
              reverse && "text-end tablet:self-end",
            )}
          >
            Be a <br />
            Joinspot Host
          </p>
        ) : (
          <p
            className={cn(
              "self-end text-22xl tablet:self-start tablet:text-40xl xl:text-56xl",
              reverse && "tablet:self-end",
            )}
          >
            Build Connections <br /> Through Events
          </p>
        )}
      </section>
      <section className="flexCenter relative flex-1 flex-col gap-[28px] pb-10 font-openSans tablet:pb-0">
        <AuthHeaders title={title} signup={signup} />
        {children}
      </section>
    </main>
  );
}
