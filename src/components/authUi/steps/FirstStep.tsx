"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { SignupProvider } from "@/contexts/SignupContext";
import { firstStepValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Role from "../Role";

type FirstStepT = z.infer<typeof firstStepValidation>;

export default function FirstStep() {
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
  } = useForm<FirstStepT>({ resolver: zodResolver(firstStepValidation) });
  const context = useContext(SignupProvider);
  if (!context) return;
  const { setStep } = context;

  const handleLogin = async () => {
    // const resault = await trigger();
    // if (!resault) return;
    // const formData = getValues();
    setStep(2);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
      className="flexCenter flex-col gap-[28px] text-12sm text-secondActive tablet:w-[440px] tablet:text-center laptop:w-[412px]"
    >
      <div className="w-full space-y-3 tablet:space-y-[18px]">
        <Input<FirstStepT>
          placeholder="Your full name"
          register={register}
          name="fullName"
          type="text"
          error={errors.fullName?.message as string}
        />
        <Input<FirstStepT>
          placeholder="Your Email"
          register={register}
          name="email"
          type="email"
          error={errors.email?.message as string}
        />
        <Input<FirstStepT>
          placeholder="Your city"
          register={register}
          name="city"
          type="text"
          error={errors.city?.message as string}
        />

        <p className="">
          You already have an account !
          <Link href="/login" className="font-semibold text-main underline">
            Login
          </Link>
        </p>
      </div>
      <p>Take the experience as : </p>
      <section className="tablet:flexCenter flexBetween mt-5 tablet:flex-col tablet:gap-10 laptop:flex-row laptop:gap-5">
        <Role />
        <Role />
      </section>
      <Button secondary icon>
        Next
      </Button>
    </form>
  );
}
