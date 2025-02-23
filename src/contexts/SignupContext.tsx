"use client";

import { Category, City, DataType } from "@/libs/types";
import { createContext, ReactNode, useState, useEffect } from "react";

type SignupContextType = {
  data: DataType | null;
  step: number;
  setStep: (n: number) => void;
  handleData: (data: DataType) => void;
  goBack: () => void;
  setEmailError: (error: string) => void;
  error: string | null;
  cities: City[];
  categories: Category[];
};

type ContextProps = {
  cities: City[];
  categories: Category[];
  children: ReactNode;
};

export const SignupContext = createContext<SignupContextType | null>(null);

export default function SignupProvider({
  children,
  cities,
  categories,
}: ContextProps) {
  const getLocalStorageData = () => {
    if (typeof window === "undefined") return null;
    const storedData = localStorage.getItem("signup");
    return storedData ? JSON.parse(storedData) : null;
  };

  const [step, setStep] = useState(1);
  const [data, setData] = useState<DataType | null>(getLocalStorageData);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleStorageChange = () => {
      setData(getLocalStorageData());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const goBack = () =>
    setStep((prev) => Math.max(prev === 5 ? 1 : prev - 1, 1));

  const handleData = (newData: DataType) => {
    setData((prevData) => {
      const updatedData = { ...prevData, ...newData };
      localStorage.setItem("signup", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const setEmailError = (error: string) => {
    setError(error);
    setStep(1);
  };

  return (
    <SignupContext.Provider
      value={{
        step,
        setStep,
        handleData,
        data,
        goBack,
        setEmailError,
        error,
        cities,
        categories,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
}
