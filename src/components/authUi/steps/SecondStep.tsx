"use client";

import Button from "@/components/Button";
import Check from "@/components/Check";
import Input from "@/components/Input";
import Select from "@/components/select/Select";
import { SignupProvider } from "@/contexts/SignupContext";
import { getContext } from "@/libs/utils";
import { firstStepValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useContext, useState } from "react";
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

  const [proveBy, setProveBy] = useState<"degree" | "business" | "">("");
  const { setStep } = getContext(SignupProvider);

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
        <div className="space-y-2 tablet:space-y-[6px]">
          <p className="text-start text-12sm text-darker">
            Your activities category <span className="text-main">*</span>
          </p>
          <Select<FirstStepT>
            placeholder="Chose your category"
            register={register}
            name="fullName"
            error={errors.fullName?.message as string}
          />
        </div>

        <div className="tablet:flexBetween flex-col justify-items-start gap-3 tablet:flex-row">
          <Check
            id="degree"
            handleClick={() => setProveBy("degree")}
            proveBy={proveBy}
          >
            prove by degree
          </Check>
          <Check
            id="business"
            handleClick={() => setProveBy("business")}
            proveBy={proveBy}
          >
            prove by business
          </Check>
        </div>

        {proveBy === "degree" && (
          <h1 className="text-56xl text-main">Business</h1>
        )}
        {proveBy === "business" && (
          <h1 className="text-56xl text-main">Degree</h1>
        )}

        <p className="">
          You already have an account !
          <Link href="/login" className="font-semibold text-main underline">
            Login
          </Link>
        </p>
      </div>
      <p>Take the experience as : </p>
      <Button secondary icon>
        Next
      </Button>
    </form>
  );
}
