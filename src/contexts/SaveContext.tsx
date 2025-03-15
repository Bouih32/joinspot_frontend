"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

type SaveContextT = {
  handleSave: (data: string) => void;
  data: string[];
};

export const SaveContext = createContext<SaveContextT | null>(null);

export default function SaveProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<string[]>([]); // Always start with an empty array

  useEffect(() => {
    const storedData = localStorage.getItem("saved");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []); // Load local storage **only on the client**

  useEffect(() => {
    const handleStorageChange = () => {
      const storedData = localStorage.getItem("saved");
      setData(storedData ? JSON.parse(storedData) : []);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleSave = (newData: string) => {
    setData((prevData) => {
      const updatedData = prevData.includes(newData)
        ? prevData.filter((item) => item !== newData) // Remove if exists
        : [...prevData, newData]; // Add if not exists

      localStorage.setItem("saved", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  return (
    <SaveContext.Provider value={{ data, handleSave }}>
      {children}
    </SaveContext.Provider>
  );
}
