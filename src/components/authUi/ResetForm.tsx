"use client";

import { resetValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../Input";
import Button from "../Button";
import { forgotPswrd } from "@/actions/forgotPswrd";
import { MdMarkEmailRead } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type resetValidationT = z.infer<typeof resetValidation>;

export default function ResetForm() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    trigger,
    formState: { errors },
    setError,
    getValues,
  } = useForm<resetValidationT>({
    resolver: zodResolver(resetValidation),
  });

  const handleSubmit = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();
    setLoading(true);
    const res = await forgotPswrd(formData);
    if (res.status === 404) {
      setLoading(false);
      setError("email", { type: "manual", message: res.data.message });
    } else {
      setLoading(false);
      setDone(true);
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex h-full w-full flex-col justify-center gap-[48px] rounded-[40px] bg-resetBgMobile bg-top px-[19px] text-center tablet:gap-[34px] tablet:rounded-[60px] tablet:bg-resetBg tablet:bg-center tablet:px-[92px]"
    >
      {!done ? (
        <>
          <div className="">
            <h1 className="text-28xl text-main laptop:text-40xl">
              Forget Password
            </h1>
            <p className="text-12sm text-neutralDarkActive tablet:text-16sm">
              Forgot your password? Please enter your email and we'll send a
              link to restore your password
            </p>
          </div>
          <Input<resetValidationT>
            placeholder="Your email"
            register={register}
            name="email"
            type="email"
            error={errors.email?.message as string}
          />
          <Button secondary icon={!loading} classname="self-center">
            Send
            {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
          </Button>
        </>
      ) : (
        <div className="flexCenter flex-col gap-[26px] text-main">
          <MdMarkEmailRead className="text-[40px] tablet:text-[70px] laptop:text-[90px]" />
          <h3 className="text-22xxl tablet:text-28xxl">
            Password reset link sent!
          </h3>
          <p className="text-12lg text-neutralDarkHover tablet:text-16lg">
            Please check your email and follow the instructions to reset your
            password.
          </p>
          <Link href="/login">
            <Button secondary classname="self-center">
              Done
            </Button>
          </Link>
        </div>
      )}
    </form>
  );
}
