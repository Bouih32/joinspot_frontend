"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Summary from "./Summary";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { joinValidation } from "@/libs/validation";
import AddInput from "../add/AddInput";
import Button from "@/components/Button";
import { MdOutlinePayment } from "react-icons/md";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { JoinContextP } from "@/contexts/JoinContext";
import { cn, getContext } from "@/libs/utils";
import { joinActivity } from "@/actions/activityActions";

export type JoinT = z.infer<typeof joinValidation>;

export default function JoinForm() {
  const { user, activity, handleCode } = getContext(JoinContextP);
  const [loading, setLoading] = useState(false);

  const {
    register,
    trigger,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<JoinT>({
    resolver: zodResolver(joinValidation),
    defaultValues: {
      email: user.email && user.email,
      fullName: user.fullName && user.fullName,
      country: "Morocco",
      quantity: "1",
    },
  });

  const handleQuantity = (count: number) => {
    setValue("quantity", count.toString());
  };

  const handleSubmit = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();
    setLoading(true);
    const code = await joinActivity(formData, activity.activityId);
    setLoading(false);
    handleCode(code.code);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="mx-auto flex w-full flex-col justify-between gap-8 rounded-xl border-neutralLightActive tablet:flex-row tablet:border tablet:p-5 laptop:w-[1064px] laptop:justify-start laptop:gap-[141px]"
    >
      <Summary handleQuantity={handleQuantity} />
      <section className="flex h-full w-full flex-col gap-4 tablet:w-[409px] tablet:gap-6 laptop:gap-8">
        <h3 className="text-20lg text-second">Pay with card</h3>
        <div className="space-y-1">
          <p className="text-14lg text-neutral">Email</p>
          <AddInput<JoinT>
            placeholder="Your email"
            register={register}
            name="email"
            type="text"
            error={errors.email?.message as string}
          />
        </div>
        <div className="space-y-1">
          <p className="text-14lg text-neutral">Card information</p>
          <div
            className={cn(
              (errors.cardNumber || errors.cvvlast4Digits || errors.expDate) &&
                "rounded border border-error",
            )}
          >
            <AddInput<JoinT>
              placeholder="1234 1234 1234 1234"
              register={register}
              name="cardNumber"
              type="number"
              classname="rounded-b-none"
              error={undefined}
              icon={<MdOutlinePayment className="text-[20px] text-second" />}
            />
            <div className="grid w-full grid-cols-2">
              <AddInput<JoinT>
                placeholder="MM / YY"
                register={register}
                name="expDate"
                type="text"
                classname="border-t-0 rounded-br-none rounded-t-none"
                error={undefined}
              />
              <AddInput<JoinT>
                placeholder="CVC"
                register={register}
                classname="border-t-0 rounded-t-none rounded-bl-none border-l-0"
                name="cvvlast4Digits"
                type="number"
                error={undefined}
              />
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-14lg text-neutral">Cardholder name</p>
          <AddInput<JoinT>
            placeholder="Full name on card"
            register={register}
            name="fullName"
            type="text"
            error={errors.fullName?.message as string}
          />
        </div>
        <div className="space-y-1">
          <p className="text-14lg text-neutral">Country or region</p>
          <AddInput<JoinT>
            placeholder="Morocco"
            register={register}
            name="country"
            type="text"
            error={errors.country?.message as string}
          />
        </div>

        <div className="text-12sm tablet:text-14sm">
          <div className="flex items-center gap-[6px]">
            <p>Your Payment Information is Secure with Us!</p>
          </div>

          <p className="text-neutral">
            Just a friendly reminder that all purchases are final.
          </p>
        </div>

        <Button
          disabled={loading}
          classname={cn("w-full", loading && "pointer-events-none")}
        >
          Pay
          {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
        </Button>
      </section>
    </form>
  );
}
