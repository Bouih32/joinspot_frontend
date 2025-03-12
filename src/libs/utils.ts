import { clsx, type ClassValue } from "clsx";
import { Context, useContext } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getContext = <T>(provider: Context<T>) => {
  const context = useContext(provider);
  if (!context) throw new Error("No context");
  return context;
};

export function addParam(
  param: string,
  value: string,
  searchParams: URLSearchParams,
) {
  const newParam = new URLSearchParams(searchParams.toString());
  if (newParam.get(param) === value) {
    newParam.delete(param);
  } else {
    newParam.set(param, value);
  }

  return newParam;
}
