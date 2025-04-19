"use client";

import ContactInput from "./ContactInput";
import { nanoid } from "nanoid";
import SupportRadio from "./SupportRadio";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { supportValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendSupport } from "@/actions/getActivities";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type SupportT = z.infer<typeof supportValidation>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<SupportT>({
    resolver: zodResolver(supportValidation),
  });

  const handleSubmit = async () => {
    const res = await trigger();
    if (!res) return;
    const formData = getValues();
    setLoading(true);
    await sendSupport(formData);
    setLoading(false);
  };

  const subjectName = [
    "General Inquiry",
    "Account Issues",
    "Technical Support",
    "Billing and Payments",
  ];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-1 flex-col space-y-5 px-4 pt-[30px] tablet:space-y-[45px] tablet:pt-[70px] laptop:px-20 laptop:pt-[56px]"
    >
      <div className="flex w-full flex-col gap-5 tablet:flex-row tablet:justify-between">
        <ContactInput
          register={register}
          error={errors.firstName?.message as string}
          name="firstName"
          placeholder="First Name"
          type="text"
        />
        <ContactInput
          register={register}
          error={errors.lastName?.message as string}
          name="lastName"
          placeholder="Last Name"
          type="text"
        />
      </div>
      <div className="flex w-full flex-col gap-5 tablet:flex-row tablet:justify-between">
        <ContactInput
          register={register}
          error={errors.email?.message as string}
          name="email"
          placeholder="Email"
          type="email"
        />
        <ContactInput
          register={register}
          error={errors.phone?.message as string}
          name="phone"
          placeholder="Phone "
          type="number"
        />
      </div>
      <div className="space-y-2.5 tablet:space-y-[14px]">
        <h3 className="text-14xxl text-main">Select Subject?</h3>
        <div className="grid grid-cols-2 items-start justify-between gap-y-[14px] tablet:grid-cols-4">
          {subjectName.map((ele, index) => (
            <div key={nanoid()} onClick={() => setValue("subject", ele)}>
              <SupportRadio
                id={index.toString()}
                error={errors.subject?.message as string}
              >
                {ele}
              </SupportRadio>
            </div>
          ))}
        </div>
      </div>

      <ContactInput
        register={register}
        error={errors.message?.message as string}
        name="message"
        placeholder="Message"
        type="text"
      />
      <Button
        disabled={loading}
        classname="text-12lg py-2.5  tablet:mt-0 px-6 tablet:py-2.5 tablet:px-6 self-center tablet:self-end "
      >
        Send Message
        {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
      </Button>
    </form>
  );
}
