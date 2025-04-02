"use client";

import { updateUserData } from "@/actions/getActivities";
import Button from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { infoValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { z } from "zod";

export type infoT = z.infer<typeof infoValidation>;

type InfoFormProps = {
  userName: string;
  email: string;
  bio: string;
};

export default function InfoForm({ userName, email, bio }: InfoFormProps) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<infoT>({
    resolver: zodResolver(infoValidation),
    defaultValues: {
      userName: userName && userName,
      email: email && email,
      bio: bio && bio,
    },
  });

  const handleChange = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();
    setLoading(true);
    await updateUserData(formData);
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
        Your informations
      </p>
      <section className="flex flex-col justify-between gap-4 laptop:flex-row">
        <div className="flex-1 space-y-4">
          <div className="space-y-[2px]">
            <p className="text-12xxl tablet:text-14xxl">Your username</p>
            <Input<infoT>
              placeholder="Your username"
              register={register}
              name="userName"
              type="text"
              error={errors.userName?.message as string}
            />
          </div>
          <div className="space-y-[2px]">
            <p className="text-12xxl tablet:text-14xxl">Your username</p>
            <Input<infoT>
              placeholder="Your email"
              register={register}
              name="email"
              type="text"
              error={errors.email?.message as string}
            />
          </div>
        </div>
        <div className="flex-1 space-y-[2px]">
          <p className="text-12xxl tablet:text-14xxl">Your description</p>
          <TextArea<infoT>
            placeholder="Your description"
            register={register}
            name="bio"
            error={errors.bio?.message as string}
            classname="border-neutral bg-[#F4F4F4]"
          />
        </div>
      </section>
      <div className="tablet:self-end">
        <Button>
          Change
          {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
        </Button>
      </div>
    </form>
  );
}
