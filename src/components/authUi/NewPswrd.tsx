"use client";

import { newPswrd, resetValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../Input";
import Button from "../Button";
import { useState } from "react";
import { resetForgotenPswrd } from "@/actions/forgotPswrd";
import Link from "next/link";
import { BiCheckCircle } from "react-icons/bi";
import { MdOutlineErrorOutline } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type newPswrdT = z.infer<typeof newPswrd>;

export default function NewPswrd({ token }: { token: string }) {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resetError, setResetError] = useState<string | null>(null);
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
  } = useForm<newPswrdT>({
    resolver: zodResolver(newPswrd),
  });

  const handleSubmit = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();
    const newPassword = formData.password;
    setLoading(true);
    const res = await resetForgotenPswrd({ token, newPassword });
    if (res.status === 400 || res.status === 500) {
      setLoading(false);
      setResetError("Token expired or is unvalid");
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
              {done ? " Reset successfully  " : "Forget Password"}
            </h1>
            <p className="text-12sm text-darker tablet:text-16sm">
              {done
                ? " Please login with your new password to access your account"
                : "Create a new password"}
            </p>
            {done && (
              <Link href="/login">
                <Button secondary icon classname="self-center mx-auto mt-4">
                  Login
                </Button>
              </Link>
            )}
          </div>
          <div className="space-y-[6px] tablet:space-y-3">
            <Input<newPswrdT>
              placeholder="Your new password"
              register={register}
              name="password"
              type="password"
              error={errors.password?.message as string}
            />
            <Input<newPswrdT>
              placeholder="Confirm password"
              register={register}
              name="passwordValidate"
              type="password"
              error={errors.passwordValidate?.message as string}
            />
          </div>
          <Button secondary icon={!loading} classname="self-center">
            Send
            {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
          </Button>
        </>
      ) : (
        <div className="flexCenter flex-col gap-[20px] text-main">
          {resetError ? (
            <MdOutlineErrorOutline className="text-[40px] tablet:text-[70px] laptop:text-[90px]" />
          ) : (
            <BiCheckCircle className="text-[40px] tablet:text-[70px] laptop:text-[90px]" />
          )}
          <h3 className="tablet:text-28xxl text-22xxl">
            {resetError
              ? "This token is invalid or has expired"
              : "Your password has been reset successfully!"}
          </h3>
          <p className="text-12lg text-neutralDarkHover tablet:text-16lg">
            {resetError
              ? "Please try again later. "
              : "You can now log in with your new password."}
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
