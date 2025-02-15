"use client";

import { DataType } from "@/libs/types";
import { createContext, ReactNode, useState, useEffect } from "react";

type SignupContextType = {
  data: DataType | null;
  step: number;
  setStep: (n: number) => void;
  handleData: (data: DataType) => void;
  goBack: () => void;
};

export const SignupContext = createContext<SignupContextType | null>(null);

export default function SignupProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(2);
  const [data, setData] = useState<DataType | null>(null);

  // Load existing signup data on mount
  useEffect(() => {
    const storedData = localStorage.getItem("signup");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const goBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleData = (newData: DataType) => {
    setData((prevData) => {
      const updatedData = { ...prevData, ...newData };
      localStorage.setItem("signup", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  return (
    <SignupContext.Provider value={{ step, setStep, handleData, data, goBack }}>
      {children}
    </SignupContext.Provider>
  );
}
