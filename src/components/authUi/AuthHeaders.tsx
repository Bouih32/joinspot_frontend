"use client";

import { cn, getContext } from "@/libs/utils";
import MainTitle from "./MainTitle";
import SubTitle from "./SubTitle";
import { SignupContext } from "@/contexts/SignupContext";
import { BsArrowLeftShort } from "react-icons/bs";

type AuthHeaders = {
  title: string;
  signup?: boolean;
  mobile?: boolean;
};

export default function AuthHeaders({ title, signup, mobile }: AuthHeaders) {
  const { step, goBack } = getContext(SignupContext);
  return step !== 6 || !signup ? (
    <div
      className={cn(
        "hidden text-center font-poppins tablet:block",
        mobile &&
          "absolute bottom-0 flex items-center gap-2.5 text-start tablet:hidden",
      )}
    >
      {mobile && (
        <BsArrowLeftShort
          onClick={goBack}
          className={cn(
            "mt-1 self-start text-[20px] text-secondActive hover:text-main",
            (step === 1 || !signup) && "hidden",
          )}
        />
      )}
      <div className="">
        <MainTitle>{title}</MainTitle>
        <SubTitle>
          {signup
            ? "Sign up today and be part of something amazing!"
            : "Login with your account"}
        </SubTitle>
      </div>
    </div>
  ) : null;
}
