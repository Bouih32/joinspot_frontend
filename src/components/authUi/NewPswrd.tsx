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

type newPswrdT = z.infer<typeof newPswrd>;

export default function NewPswrd({ token }: { token: string }) {
  const [done, setDone] = useState(false);
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
    const res = await resetForgotenPswrd({ token, newPassword });
    if (res.status === 400 || res.status === 500) {
      setResetError("Token expired or is unvalid");
    } else setDone(true);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex h-full w-full flex-col justify-center gap-[48px] rounded-[40px] bg-resetBgMobile bg-top px-[19px] text-center tablet:gap-[34px] tablet:rounded-[60px] tablet:bg-resetBg tablet:bg-center tablet:px-[92px]"
    >
      {!resetError && (
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
      )}
      {resetError && (
        <div className="">
          <h1 className="text-28xl text-main laptop:text-40xl">
            Ooops , something went wrong
          </h1>
          <p className="text-12sm text-darker tablet:text-16sm">{resetError}</p>
        </div>
      )}
      {!done && !resetError && (
        <>
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
          <Button secondary icon classname="self-center">
            Send
          </Button>
        </>
      )}
    </form>
  );
}
