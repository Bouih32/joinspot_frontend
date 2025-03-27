"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Summary from "./Summary";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { joinValidation } from "@/libs/validation";
import AddInput from "../add/AddInput";
import Button from "@/components/Button";

type JoinT = z.infer<typeof joinValidation>;

export default function JoinForm() {
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<JoinT>({
    resolver: zodResolver(joinValidation),
  });
  return (
    <form className="mx-auto flex w-full flex-col justify-between gap-8 rounded-xl border-neutralLightActive tablet:flex-row tablet:border tablet:p-5 laptop:w-[1064px]">
      <Summary />
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
          <div className="">
            <AddInput<JoinT>
              placeholder="1234 1234 1234 1234"
              register={register}
              name="cardNumber"
              type="text"
              classname="rounded-b-none"
              error={errors.cardNumber?.message as string}
            />
            <div className="grid w-full grid-cols-2">
              <AddInput<JoinT>
                placeholder="MM / YY"
                register={register}
                name="expDate"
                type="text"
                classname="border-t-0 rounded-br-none rounded-t-none"
                error={errors.expDate?.message as string}
              />
              <AddInput<JoinT>
                placeholder="CVC"
                register={register}
                classname="border-t-0 rounded-t-none rounded-bl-none border-l-0"
                name="cvvlast4Digits"
                type="text"
                error={errors.cvvlast4Digits?.message as string}
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

        <div className="text-10sm tablet:text-14sm">
          <p>Securely save my information for 1-click checkout</p>
          <p className="text-neutral">
            pay faster on this site and everywhere is accepted
          </p>
        </div>

        <Button classname="w-full">Pay</Button>
      </section>
    </form>
  );
}
