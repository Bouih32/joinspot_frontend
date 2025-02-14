"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/select/Select";
import { SignupProvider } from "@/contexts/SignupContext";
import { firstStepValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BiSolidDownArrow } from "react-icons/bi";
import { z } from "zod";

type FirstStepT = z.infer<typeof firstStepValidation>;

export default function SecondStep() {
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
    // console.log(formData);
    setStep(3);
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
        <Select<FirstStepT>
          placeholder="Chose your category"
          register={register}
          name="fullName"
          error={errors.fullName?.message as string}
        >
          <p className="cursor-pointer border-b-[2px] border-transparent px-2 py-[7px] transition-all duration-75 hover:border-main hover:bg-mainLight hover:font-bold hover:text-main tablet:px-3">
            hello
          </p>
          <p className="cursor-pointer border-b-[2px] border-t border-transparent border-t-neutralDark px-2 py-[7px] transition-all duration-75 hover:border-main hover:bg-mainLight hover:font-bold hover:text-main tablet:px-3">
            hello
          </p>
          <p className="cursor-pointer border-b-[2px] border-t border-transparent border-t-neutralDark px-2 py-[7px] transition-all duration-75 hover:border-main hover:bg-mainLight hover:font-bold hover:text-main tablet:px-3">
            hello
          </p>
        </Select>

        <p className="">
          You already have an account !
          <Link href="/login" className="font-semibold text-main underline">
            Login
          </Link>
        </p>
      </div>
      <p>Take the experience as : </p>
      <Button secondary icon>
        2
      </Button>
    </form>
  );
}
