"use client";

import { createContext, ReactNode, useState } from "react";

type ContextTypes = {
  step: number;
};

const SignupProvider = createContext<ContextTypes | null>(null);

export default function SignupContext({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1);
  return (
    <SignupProvider.Provider value={{ step }}>
      {children}
    </SignupProvider.Provider>
  );
}
