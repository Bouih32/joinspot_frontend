"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { SignupContext } from "@/contexts/SignupContext";
import { firstStepValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Role from "../Role";
import { getContext } from "@/libs/utils";
import SelectCities from "@/components/select/SelectCities";

type FirstStepT = z.infer<typeof firstStepValidation>;

export default function FirstStep() {
  const [selected, setSelected] = useState<string>("visitor");
  const { setStep, data, handleData, error } = getContext(SignupContext);
  const [city, setCity] = useState<string | null>(data?.city ?? null);

  const {
    register,
    trigger,
    formState: { errors },
    setError,
    getValues,
    setValue,
  } = useForm<FirstStepT>({
    resolver: zodResolver(firstStepValidation),
    defaultValues: {
      fullName: data?.fullName,
      email: data?.email,
      role: selected,

      city: data?.city,
    },
  });

  useEffect(() => {
    if (error) {
      setError("email", {
        type: "manual",
        message: "Email already in use",
      });
    }
  }, []);

  const handleRole = (r: "visitor" | "organiser") => {
    setSelected(r);
    setValue("role", r);
  };

  const handleSubmit = async () => {
    const resault = await trigger();
    if (!resault) return;

    const formData = getValues();
    handleData(formData);

    formData.role === "visitor" ? setStep(5) : setStep(2);
  };

  const handleClick = (ele: string) => {
    setValue("city", ele);
    setCity(ele);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="tablet:flexCenter flex flex-col gap-[28px] text-12sm text-secondActive tablet:w-[440px] tablet:text-center laptop:w-[412px]"
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
        <SelectCities<FirstStepT>
          placeholder="Chose your city"
          register={register}
          name="city"
          selected={city}
          handleClick={handleClick}
          error={errors.city?.message as string}
        />

        <p className="">
          You already have an account !
          <Link href="/login" className="font-semibold text-main underline">
            Login
          </Link>
        </p>
        <p className="text-start tablet:text-center">
          Take the experience as :
        </p>
      </div>

      <section className="tablet:flexCenter flexBetween mt-5 tablet:flex-col tablet:gap-10 laptop:flex-row laptop:gap-5">
        <Role variant="visitor" handleRole={handleRole} selected={selected} />
        <Role variant="organiser" handleRole={handleRole} selected={selected} />
      </section>
      <Button secondary icon classname="self-center">
        Next
      </Button>
    </form>
  );
}
