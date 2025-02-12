import { cn } from "@/libs/utils";
import Image from "next/image";
import { ReactNode } from "react";
import logo from "@/images/logoWhite.png";
import MainTitle from "./MainTitle";
import SubTitle from "./SubTitle";

type WrapperProps = {
  children: ReactNode;
  signup?: boolean;
  reverse?: boolean;
  classname: string;
};

export default function AuthWrapper({
  children,
  reverse,
  signup,
  classname,
}: WrapperProps) {
  return (
    <main
      className={cn(
        "flex h-screen flex-col gap-[30px] tablet:flex-row",
        reverse && "tablet:flex-row-reverse",
      )}
    >
      <section
        className={cn(
          "relative flex min-h-[284px] flex-col justify-between px-4 py-[29px] pb-[64px] font-poppins text-white tablet:w-[504px] tablet:px-[50px] tablet:py-[78px] laptop:px-20 laptop:py-[61px] xl:w-[712px]",
          classname,
        )}
      >
        <div className="absolute bottom-0 text-start font-poppins tablet:hidden">
          <MainTitle>{signup ? "Signup" : "Login"}</MainTitle>
          <SubTitle>
            {signup
              ? "Sign up today and be part of something amazing!"
              : "Login with your account"}
          </SubTitle>
        </div>
        <Image
          src={logo}
          alt="logo"
          className={cn(
            "h-[32px] w-[166px] object-contain tablet:w-[195px] laptop:h-[72px] laptop:w-[217px]",
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
      <section className="flexCenter flex-1 flex-col gap-[28px] pb-10 font-openSans tablet:pb-0">
        <div className="hidden text-center font-poppins tablet:block">
          <MainTitle>{signup ? "Signup" : "Login"}</MainTitle>
          <SubTitle>
            {signup
              ? "Sign up today and be part of something amazing!"
              : "Login with your account"}
          </SubTitle>
        </div>
        {children}
      </section>
    </main>
  );
}
