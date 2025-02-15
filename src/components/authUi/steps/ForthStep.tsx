"use client";

import Button from "@/components/Button";
import { SignupContext } from "@/contexts/SignupContext";
import { useContext } from "react";
import { BiCheckCircle } from "react-icons/bi";

export default function ForthStep() {
  const context = useContext(SignupContext);
  if (!context) return;
  const { setStep } = context;

  return (
    <form
      onSubmit={() => {
        setStep(5);
      }}
      className="flexCenter flex-col gap-[28px] text-12sm text-secondActive tablet:w-[440px] tablet:text-center laptop:w-[412px]"
    >
      <BiCheckCircle className="self-start text-[40px] text-main tablet:self-center" />
      <h3 className="self-start text-[26px] font-semibold text-main tablet:self-center tablet:text-[40px]">
        Operating
      </h3>
      <p>
        Your request is now being processed by the JoinSpot team. You'll receive
        a verification response within a few days. In the meantime, you can
        explore the platform as a visitor until your account is fully verified.
      </p>
      <Button secondary icon>
        Next
      </Button>
    </form>
  );
}
