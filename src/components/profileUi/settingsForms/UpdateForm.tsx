"use client";

import { updatePassword, updateUserData } from "@/actions/getActivities";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { resetPswrd } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { z } from "zod";

export type resetT = z.infer<typeof resetPswrd>;

export default function UpdateForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    trigger,
    setError,
    formState: { errors },
    getValues,
  } = useForm<resetT>({
    resolver: zodResolver(resetPswrd),
  });

  const handleChange = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();
    setLoading(true);
    const res = await updatePassword(formData);
    console.log("---------------------------------", res);

    if (res.status === 401) {
      setLoading(false);
      setError("oldPassword", {
        type: "manual",
        message: "Password is uncorrect",
      });
    }
    setLoading(false);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleChange();
      }}
      className="flex w-full flex-col space-y-[22px]"
    >
      <p className="w-full border-b border-neutralLightHover pb-3 text-12xl text-neutralDarkActive tablet:text-14xl laptop:text-16xl">
        Password
      </p>
      <section className="flex w-full flex-col gap-4 tablet:flex-row">
        <div className="w-full space-y-[2px]">
          <p className="text-12xxl tablet:text-14xxl">Your currant password</p>
          <Input<resetT>
            placeholder="Current password"
            register={register}
            name="oldPassword"
            type="password"
            error={errors.oldPassword?.message as string}
          />
        </div>
        <div className="w-full space-y-[2px]">
          <p className="text-12xxl tablet:text-14xxl">New passworde</p>
          <Input<resetT>
            placeholder="New password"
            register={register}
            name="newPassword"
            type="password"
            error={errors.newPassword?.message as string}
          />
        </div>

        <div className="w-full space-y-[2px]">
          <p className="text-12xxl tablet:text-14xxl">Repeat new password</p>
          <Input<resetT>
            placeholder="New password"
            register={register}
            name="passwordValidate"
            type="password"
            error={errors.passwordValidate?.message as string}
          />
        </div>
      </section>
      <div className="items-senter flex flex-row-reverse gap-2.5 self-start tablet:flex-row tablet:self-end">
        <Link
          href="/reset"
          className="flexCenter w-fit cursor-pointer gap-2 rounded border border-main bg-transparent px-3 py-[3px] font-openSans text-14xl text-main tablet:px-4 tablet:py-[6px]"
        >
          Forgot password
        </Link>
        <Button>
          Change
          {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
        </Button>
      </div>
    </form>
  );
}
