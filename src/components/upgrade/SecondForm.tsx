"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { SignupContext } from "@/contexts/SignupContext";
import { getContext } from "@/libs/utils";
import { thirdStepValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SignupUpload from "../authUi/SignupUpload";
import { useState } from "react";
import { UpgradeContext } from "@/contexts/UpgradeContext";
import { upgradeRequest } from "@/actions/getActivities";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type ThirdStepT = z.infer<typeof thirdStepValidation>;

export default function SecondForm() {
  const [loading, setLoading] = useState(false);
  const { setStep, data, handleData } = getContext(UpgradeContext);
  const {
    register,
    trigger,
    setValue,
    formState: { errors },
    getValues,
  } = useForm<ThirdStepT>({
    resolver: zodResolver(thirdStepValidation),
    defaultValues: {
      idBackPic: data?.idBackPic,
      idFrontPic: data?.idFrontPic,
    },
  });
  const handleUpgrade = async (formData: {
    idFrontPic: string;
    idBackPic: string;
    idFrontPicName?: string | undefined;
    idBackPicName?: string | undefined;
  }) => {
    if (!data) return;
    setLoading(true);
    await upgradeRequest({ ...data, ...formData });
    setLoading(false);
    setStep(3);
  };

  const handleSubmit = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();
    handleData(formData);
    await handleUpgrade(formData);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flexCenter relative flex-col gap-[28px] text-12sm text-secondActive tablet:w-[440px] tablet:text-center laptop:w-[412px]"
    >
      <div className="w-full space-y-3 tablet:space-y-[18px]">
        <div className="space-y-2 tablet:space-y-[6px]">
          <p className="text-start text-12sm text-darker">
            Your id card pictures <span className="text-main">*</span>
          </p>
          <SignupUpload<ThirdStepT>
            placeholder="Add front picture"
            setValue={setValue}
            register={register}
            name="idFrontPic"
            targetName="idFrontPicName"
            error={errors.idFrontPic?.message as string}
          />
        </div>
        <div className="space-y-2 tablet:space-y-[6px]">
          <SignupUpload<ThirdStepT>
            placeholder="Add back picture"
            setValue={setValue}
            register={register}
            name="idBackPic"
            targetName="idBackPicName"
            error={errors.idBackPic?.message as string}
          />

          <p className="text-start text-12sm text-secondActive">
            <span className="text-main">*</span> Necessary information
          </p>
        </div>
      </div>

      <Button secondary icon>
        Next
        {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
      </Button>
    </form>
  );
}
