"use client";

import { Category, DataType } from "@/libs/types";
import { createContext, ReactNode, useState, useEffect } from "react";

type SignupContextType = {
  data: DataType | null;
  step: number;
  setStep: (n: number) => void;
  handleData: (data: DataType) => void;
  goBack: () => void;

  error: string | null;
  categories: Category[];
};

type ContextProps = {
  categories: Category[];
  children: ReactNode;
};

export const UpgradeContext = createContext<SignupContextType | null>(null);

export default function UpgradeProvider({
  children,
  categories,
}: ContextProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<DataType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const goBack = () =>
    setStep((prev) =>
      prev > 1 && data?.role !== "visitor"
        ? prev - 1
        : prev === 5 && data?.role === "visitor"
          ? 1
          : prev,
    );

  const handleData = (newData: DataType) => {
    setData((prevData) => {
      const updatedData = { ...prevData, ...newData };
      localStorage.setItem("signup", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  return (
    <UpgradeContext.Provider
      value={{
        step,
        setStep,
        handleData,
        data,
        goBack,
        error,
        categories,
      }}
    >
      {children}
    </UpgradeContext.Provider>
  );
}
