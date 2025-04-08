"use client";

import { UpgradeContext } from "@/contexts/UpgradeContext";
import { useContext } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import FinalStep from "../authUi/steps/FinalStep";

export default function UpgradeWrapper() {
  const context = useContext(UpgradeContext);
  if (!context) return;
  const { step } = context;
  return (
    <section className="flex h-full flex-col gap-5 pb-10 pt-10">
      <div className="text-center tablet:text-start">
        <h1 className="text-16xl text-darker tablet:text-20xl laptop:text-28xl">
          {step === 3
            ? "Your submission is complete."
            : "Verify your informations"}
        </h1>
        {step !== 3 && (
          <p className="text-12sm text-main tablet:text-14sm">
            Complete the inputs field to verified your organiser account
          </p>
        )}
      </div>
      {step === 1 && <FirstForm />}
      {step === 2 && <SecondForm />}
      {step === 3 && <FinalStep />}
    </section>
  );
}
