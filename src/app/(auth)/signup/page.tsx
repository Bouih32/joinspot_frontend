"use client";

import AuthWrapper from "@/components/authUi/AuthWrapper";
import FifthStep from "@/components/authUi/steps/FifthStep";
import FirstStep from "@/components/authUi/steps/FirstStep";
import ForthStep from "@/components/authUi/steps/ForthStep";
import SecondStep from "@/components/authUi/steps/SecondStep";
import ThirdStep from "@/components/authUi/steps/ThirdStep";
import Container from "@/components/Container";
import { SignupProvider } from "@/contexts/SignupContext";
import { cn } from "@/lib/utils";
import { useContext } from "react";

export default function Signup() {
  const context = useContext(SignupProvider);
  if (!context) return;

  const { step } = context;
  return (
    <AuthWrapper
      title={step > 1 && step < 5 ? "Verification" : "Signup"}
      signup
      reverse={step > 1 && step < 5}
      classname={cn(
        " bg-cover bg-bottom tablet:bg-center bg-no-repeat",
        step === 1 && "tablet:bg-signupBg bg-signupBgMobile",
        step > 1 && step < 5 && "tablet:bg-signupBg2 bg-signupBgMobile2",
        step === 5 && "tablet:bg-signupBg3 bg-signupBgMobile3",
      )}
    >
      <Container classname="laptop:w-fit tablet:w-fit">
        {step === 1 && <FirstStep />}
        {step === 2 && <SecondStep />}
        {step === 3 && <ThirdStep />}
        {step === 4 && <ForthStep />}
        {step === 5 && <FifthStep />}
      </Container>
    </AuthWrapper>
  );
}
