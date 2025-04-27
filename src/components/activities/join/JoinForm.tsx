"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Summary from "./Summary";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { joinValidation } from "@/libs/validation";
import AddInput from "../add/AddInput";
import Button from "@/components/Button";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { JoinContextP } from "@/contexts/JoinContext";
import { cn, getContext } from "@/libs/utils";
import { createTicket, testPayment } from "@/actions/activityActions";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export type JoinT = z.infer<typeof joinValidation>;

export default function JoinForm() {
  const { user, activity, handleCode } = getContext(JoinContextP);
  const [cardComplete, setCardComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const {
    register,
    trigger,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<JoinT>({
    resolver: zodResolver(joinValidation),
    defaultValues: {
      email: user.email || "",
      fullName: user.fullName || "",
      country: "Morocco",
      quantity: "1",
    },
  });

  const handleQuantity = (count: number) => {
    setValue("quantity", count.toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await trigger();
    if (!result || !stripe || !elements || !cardComplete) return;

    const formData = getValues();
    setLoading(true);

    try {
      const { clientSecret } = await testPayment(formData, activity.activityId);

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
            billing_details: {
              name: formData.fullName,
              email: formData.email,
            },
          },
        },
      );

      if (error) throw error;
      if (paymentIntent.status === "succeeded") {
        const { code } = await createTicket(formData, activity.activityId);
        handleCode(code);
      } else {
        setError(true);
      }
    } catch (error: any) {
      // Ensure you type the error
      console.error("Payment error:", error);
      if (
        error?.message?.includes("Please use one of Stripe's test card numbers")
      ) {
        setError(error.message); // Set your frontend error state with the specific message
      } else {
        setError(true); // Or a more generic error message
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      {error && (
        <div className="mx-auto w-full rounded border border-error bg-errorHover py-1 text-center text-10xxl text-error tablet:text-12xxl laptop:w-[1064px]">
          <p>
            It looks like you're using a real card in test mode. Please use one
            of Stripe's test card numbers.
          </p>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full flex-col justify-between gap-8 rounded-xl border-neutralLightActive tablet:flex-row tablet:border tablet:p-5 laptop:w-[1064px] laptop:justify-start laptop:gap-[141px]"
      >
        <Summary handleQuantity={handleQuantity} />
        <section className="flex h-full w-full flex-col gap-4 tablet:w-[409px] tablet:gap-6 laptop:gap-8">
          <h3 className="text-20lg text-second">Pay with card</h3>

          {/* Email Field */}
          <div className="space-y-1">
            <p className="text-14lg text-neutral">Email</p>
            <AddInput<JoinT>
              placeholder="Your email"
              register={register}
              name="email"
              type="email"
              error={errors.email?.message}
            />
          </div>

          {/* Stripe Card Element */}
          <div className="space-y-1">
            <p className="text-14lg text-neutral">Card information</p>
            <div className="rounded border p-2">
              <CardElement
                onChange={(event) => {
                  setCardComplete(event.complete);
                }}
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Cardholder Name */}
          <div className="space-y-1">
            <p className="text-14lg text-neutral">Cardholder name</p>
            <AddInput<JoinT>
              placeholder="Full name on card"
              register={register}
              name="fullName"
              type="text"
              error={errors.fullName?.message}
            />
          </div>

          {/* Country */}
          <div className="space-y-1">
            <p className="text-14lg text-neutral">Country or region</p>
            <AddInput<JoinT>
              placeholder="Morocco"
              register={register}
              name="country"
              type="text"
              error={errors.country?.message}
            />
          </div>

          {/* Security Message */}
          <div className="text-12sm tablet:text-14sm">
            <div className="flex items-center gap-[6px]">
              <p>Your Payment Information is Secure with Us!</p>
            </div>
            <p className="text-neutral">
              Just a friendly reminder that all purchases are final.
            </p>
          </div>

          {/* Submit Button */}
          <Button
            disabled={loading || !stripe || !cardComplete}
            classname={cn(
              "w-full",
              (loading || !stripe || !cardComplete) && "pointer-events-none",
            )}
          >
            Pay
            {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
          </Button>
        </section>
      </form>
    </div>
  );
}
