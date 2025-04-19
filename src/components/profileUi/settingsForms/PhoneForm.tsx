"use client";

import { updatePhone } from "@/actions/getActivities";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { phoneValidation, resetPswrd } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { z } from "zod";

export type phoneT = z.infer<typeof phoneValidation>;

export default function PhoneForm({ phone }: { phone: string }) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
  } = useForm<phoneT>({
    resolver: zodResolver(phoneValidation),
    defaultValues: {
      phone: phone && phone,
    },
  });

  const handleChange = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();
    setLoading(true);
    await updatePhone(formData);
    setLoading(false);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleChange();
      }}
      className="flex w-full flex-col space-y-[22px] pb-10"
    >
      <p className="w-full border-b border-neutralLightHover pb-3 text-12xl text-neutralDarkActive tablet:text-14xl laptop:text-16xl">
        Your phone number
      </p>
      <section className="flex w-full flex-col gap-4 tablet:flex-row">
        <div className="w-full space-y-[2px]">
          <p className="text-12xxl tablet:text-14xxl">First phone number</p>
          <Input<phoneT>
            placeholder="Your phone number"
            register={register}
            name="phone"
            type="number"
            error={errors.phone?.message as string}
          />
        </div>
      </section>
      <div className="self-start tablet:self-end">
        <Button disabled={loading}>
          Change
          {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
        </Button>
      </div>
    </form>
  );
}
