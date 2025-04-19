"use client";

import { updateBank } from "@/actions/getActivities";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { bankValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { z } from "zod";

export type bankT = z.infer<typeof bankValidation>;

export default function BankForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
  } = useForm<bankT>({
    resolver: zodResolver(bankValidation),
    // defaultValues: {

    // },
  });

  const handleChange = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();

    setLoading(true);
    await updateBank(formData);
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
        Bank Informations
      </p>
      <section className="flex w-full flex-col gap-4 tablet:flex-row">
        <div className="w-full space-y-[2px]">
          <p className="text-12xxl tablet:text-14xxl">Bank name</p>

          <Input<bankT>
            placeholder="Ex:CIH bank"
            register={register}
            name="bankName"
            type="text"
            error={errors.bankName?.message as string}
          />
        </div>
        <div className="w-full space-y-[2px]">
          <p className="text-12xxl tablet:text-14xxl">Account owner's name</p>
          <Input<bankT>
            placeholder="Owner's name"
            register={register}
            name="fullName"
            type="text"
            error={errors.fullName?.message as string}
          />
        </div>

        <div className="w-full space-y-[2px]">
          <p className="text-12xxl tablet:text-14xxl">Bank account number</p>
          <Input<bankT>
            placeholder="RIB"
            register={register}
            name="rib"
            type="number"
            error={errors.rib?.message as string}
          />
        </div>
      </section>
      <div className="tablet:self-end">
        <Button disabled={loading}>
          Change
          {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
        </Button>
      </div>
    </form>
  );
}
