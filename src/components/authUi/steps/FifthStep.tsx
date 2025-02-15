"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { fifthStepValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import GoBack from "./GoBack";
import { getContext } from "@/libs/utils";
import { SignupContext } from "@/contexts/SignupContext";

type fifthStepT = z.infer<typeof fifthStepValidation>;

export default function FifthStep() {
  const { data, goBack, handleData } = getContext(SignupContext);
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

  const handleSubmit = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();
    handleData(formData);
    console.log(data);
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

      <Button secondary icon>
        Done
      </Button>
    </form>
  );
}
