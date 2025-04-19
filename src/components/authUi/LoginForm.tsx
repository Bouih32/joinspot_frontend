"use client";

import React, { useState } from "react";
import Input from "../Input";
import Link from "next/link";
import Button from "../Button";
import { z } from "zod";
import { loginValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { login } from "@/actions/login";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Banned from "./Banned";
import { getContext } from "@/libs/utils";
import { SignupContext } from "@/contexts/SignupContext";

type LoginType = z.infer<typeof loginValidation>;
export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { banned, setBannedError } = getContext(SignupContext);
  const {
    register,
    trigger,
    formState: { errors },
    setError,
    getValues,
  } = useForm<LoginType>({ resolver: zodResolver(loginValidation) });

  const handleLogin = async (formData: LoginType) => {
    setLoading(true);
    const res = await login(formData);

    if (res?.status === 404) {
      setLoading(false);
      setError("email", {
        type: "manual",
        message: "No user found with this email",
      });
    } else if (res?.status === 401) {
      setLoading(false);
      setError("password", {
        type: "manual",
        message: "Uncorrect password",
      });
    } else if (res?.status === 403) {
      setBannedError();
    } else {
      setLoading(false);
      router.refresh();
      window.location.reload();
    }
  };

  const handleSubmit = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();
    await handleLogin(formData);
  };
  return banned ? (
    <Banned />
  ) : (
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
        <div className="flexBetween text-12sm text-secondActive">
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
      <Button secondary disabled={loading}>
        Submit
        {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
      </Button>
    </form>
  );
}
