"use client";

import { resetValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../Input";
import Button from "../Button";

type resetValidationT = z.infer<typeof resetValidation>;

export default function ResetForm() {
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
  } = useForm<resetValidationT>({
    resolver: zodResolver(resetValidation),
  });

  const handleSubmit = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();

    console.log(formData);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="tablet:bg-resetBg bg-resetBgMobile flex h-full w-full flex-col justify-center gap-[48px] rounded-[40px] bg-top px-[19px] text-center tablet:gap-[34px] tablet:rounded-[60px] tablet:bg-center tablet:px-[92px]"
    >
      <div className="">
        <h1 className="text-28xl text-main laptop:text-40xl">
          Forget Password
        </h1>
        <p className="text-12sm text-darker tablet:text-16sm">
          Forgot your password? Please enter your email and we'll send a link to
          restore your password
        </p>
      </div>
      <Input<resetValidationT>
        placeholder="Your email"
        register={register}
        name="email"
        type="email"
        error={errors.email?.message as string}
      />
      <Button secondary icon classname="self-center">
        Send
      </Button>
    </form>
  );
}
