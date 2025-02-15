"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { SignupProvider } from "@/contexts/SignupContext";
import { getContext } from "@/libs/utils";
import { firstStepValidation, thirdStepValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BiImageAdd } from "react-icons/bi";
import { z } from "zod";

type ThirdStepT = z.infer<typeof thirdStepValidation>;

export default function ThirdStep() {
  const { setStep, data } = getContext(SignupProvider);
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
  } = useForm<ThirdStepT>({ resolver: zodResolver(thirdStepValidation) });

  const handleSubmit = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();
    console.log(formData);
    setStep(4);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flexCenter flex-col gap-[28px] text-12sm text-secondActive tablet:w-[440px] tablet:text-center laptop:w-[412px]"
    >
      <div className="w-full space-y-3 tablet:space-y-[18px]">
        <div className="space-y-2 tablet:space-y-[6px]">
          <p className="text-start text-12sm text-darker">
            Your id card pictures <span className="text-main">*</span>
          </p>
          <Input<ThirdStepT>
            placeholder="Add front picture"
            register={register}
            name="idFrontPic"
            type="text"
            error={errors.idFrontPic?.message as string}
            icon={<BiImageAdd className="cursor-pointer hover:text-main" />}
          />
        </div>
        <div className="space-y-2 tablet:space-y-[6px]">
          <Input<ThirdStepT>
            placeholder="Add back picture"
            register={register}
            name="idBackPic"
            type="text"
            error={errors.idBackPic?.message as string}
            icon={<BiImageAdd className="cursor-pointer hover:text-main" />}
          />
          <p className="text-start text-12sm text-secondActive">
            <span className="text-main">*</span> Necessary information
          </p>
        </div>
      </div>

      <Button secondary icon>
        Next
      </Button>
    </form>
  );
}
