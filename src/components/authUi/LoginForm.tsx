"use client";

import React from "react";
import Input from "../Input";
import Link from "next/link";
import Button from "../Button";
import { z } from "zod";
import { loginValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type LoginType = z.infer<typeof loginValidation>;
export default function LoginForm() {
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
  } = useForm<LoginType>({ resolver: zodResolver(loginValidation) });

  const handleLogin = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();
    console.log(formData);
  };
  return (
    <form
      className="flexCenter flex-col gap-[28px] tablet:w-[440px] laptop:w-[412px]"
      onSubmit={(event) => {
        event.preventDefault();
        handleLogin();
      }}
    >
      <div className="w-full space-y-3 tablet:space-y-[18px]">
        <Input<LoginType>
          placeholder="User name"
          register={register}
          name="username"
          error={errors.username?.message as string}
          type="text"
        />
        <Input<LoginType>
          placeholder="Password"
          register={register}
          name="password"
          type="password"
          error={errors.password?.message as string}
        />
        <div className="flexBetween text-10sm text-secondActive tablet:text-12sm">
          <p>
            You don’t have account ?
            <Link href="/singup" className="font-semibold text-main">
              Sign in
            </Link>
          </p>
          <Link href="/reset" className="underline">
            Forget password?
          </Link>
        </div>
      </div>
      <Button secondary>Login</Button>
    </form>
  );
}
