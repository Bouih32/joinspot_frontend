"use client";

import { createContext, ReactNode, useState } from "react";

type ContextTypes = {
  step: number;
  setStep: (n: number) => void;
};

export const SignupProvider = createContext<ContextTypes | null>(null);

export default function SignupContext({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1);
  return (
    <SignupProvider.Provider value={{ step, setStep }}>
      {children}
    </SignupProvider.Provider>
  );
}
