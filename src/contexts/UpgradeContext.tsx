"use client";

import { Category, DataType } from "@/libs/types";
import { createContext, ReactNode, useState, useEffect } from "react";

type SignupContextType = {
  data: DataType | null;
  step: number;
  setStep: (n: number) => void;
  handleData: (data: DataType) => void;
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
        categories,
      }}
    >
      {children}
    </UpgradeContext.Provider>
  );
}
