"use client";

import { JoinContextP } from "@/contexts/JoinContext";
import { getContext } from "@/libs/utils";
import JoinForm from "./JoinForm";
import Ticket from "./Ticket";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

export default function JoinWrapper() {
  const { step } = getContext(JoinContextP);

  return (
    <>
      {step === 1 ? (
        <Elements stripe={stripePromise}>
          <JoinForm />
        </Elements>
      ) : (
        <Ticket />
      )}
    </>
  );
}
