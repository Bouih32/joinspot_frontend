"use client";

import React from "react";
import Input from "../Input";
import Link from "next/link";
import Button from "../Button";
import { z } from "zod";
import { loginValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { login } from "@/actions/login";
import { useRouter } from "next/navigation";

type LoginType = z.infer<typeof loginValidation>;
export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    trigger,
    formState: { errors },
    setError,
    getValues,
  } = useForm<LoginType>({ resolver: zodResolver(loginValidation) });

  const handleLogin = async (formData: LoginType) => {
    const res = await login(formData);
    console.log(res?.status);
    if (res?.status === 404) {
      setError("email", {
        type: "manual",
        message: "No user found with this email",
      });
    }

    if (res?.status === 401) {
      setError("password", {
        type: "manual",
        message: "Uncorrect password",
      });
    }
    router.push("/");
  };

  const handleSubmit = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();
    await handleLogin(formData);
  };
  return (
    <form
      className="flexCenter flex-col gap-[28px] tablet:w-[440px] laptop:w-[412px]"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <div className="w-full space-y-3 tablet:space-y-[18px]">
        <Input<LoginType>
          placeholder="User email"
          register={register}
          name="email"
          error={errors.email?.message as string}
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
            <Link href="/signup" className="font-semibold text-main">
              Sign in
            </Link>
          </p>
          <Link href="/reset" className="underline">
            Forget password?
          </Link>
        </div>
      </div>
      <Button secondary>Submit</Button>
    </form>
  );
}
