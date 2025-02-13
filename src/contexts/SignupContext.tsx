"use client";

import { DataType } from "@/libs/types";
import { createContext, ReactNode, useState } from "react";

type ContextTypes = {
  data: DataType | null;
  step: number;
  setStep: (n: number) => void;
  handleData: <T>(data: T) => void;
};

export const SignupProvider = createContext<ContextTypes | null>(null);

export default function SignupContext({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(3);
  const [data, setData] = useState<DataType | null>(null);

  const handleData = <T,>(data: T) => {
    setData((prev) => ({ ...prev, ...data }));
  };

  return (
    <SignupProvider.Provider value={{ step, setStep, handleData, data }}>
      {children}
    </SignupProvider.Provider>
  );
}
