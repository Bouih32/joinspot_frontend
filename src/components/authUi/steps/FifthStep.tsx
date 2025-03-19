"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { fifthStepValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import GoBack from "./GoBack";
import { getContext } from "@/libs/utils";
import { SignupContext } from "@/contexts/SignupContext";
import { signup } from "@/actions/signup";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";

type fifthStepT = z.infer<typeof fifthStepValidation>;

export default function FifthStep() {
  const { data, goBack, handleData, setEmailError, setStep } =
    getContext(SignupContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    trigger,
    formState: { errors },
    getValues,
  } = useForm<fifthStepT>({
    resolver: zodResolver(fifthStepValidation),
    defaultValues: {
      username: data?.username,
      password: data?.password,
    },
  });

  const handleSignup = async (formData: {
    username: string;
    password: string;
    passwordValidate: string;
  }) => {
    if (!data) return;
    setLoading(true);
    const res = await signup({ ...data, ...formData });
    if (res?.status === 400) {
      setEmailError(res.data.message);
      return;
    }

    if (res?.status === 500) {
      setEmailError("Something went wrong ");
      return;
    }

    setStep(6);
    localStorage.clear();
  };

  const handleSubmit = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();
    handleData(formData);
    await handleSignup(formData);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flexCenter flex-col gap-[28px] text-12sm text-secondActive tablet:w-[440px] tablet:text-center laptop:w-[412px]"
    >
      <GoBack goBack={goBack} />
      <div className="w-full space-y-3 tablet:space-y-[18px]">
        <Input<fifthStepT>
          placeholder="Your username"
          register={register}
          name="username"
          type="text"
          error={errors.username?.message as string}
        />
        <Input<fifthStepT>
          placeholder="Choose a password"
          register={register}
          name="password"
          type="password"
          error={errors.password?.message as string}
        />
        <Input<fifthStepT>
          placeholder="Confirm password"
          register={register}
          name="passwordValidate"
          type="password"
          error={errors.passwordValidate?.message as string}
        />
      </div>

      <Button secondary icon={!loading} disabled={loading}>
        {loading ? "Loading" : "Done"}
        {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
      </Button>
    </form>
  );
}
