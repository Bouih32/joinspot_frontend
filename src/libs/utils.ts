import { clsx, type ClassValue } from "clsx";
import { Context, useContext } from "react";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

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

export const formatTimestamp = (timestampMs: number): string => {
  /**
   * Formats a timestamp in milliseconds to the format "DD/MM/YYYY".
   *
   * @param timestampMs The timestamp in milliseconds.
   * @returns The formatted date string in "DD/MM/YYYY" format.
   */
  const date = new Date(timestampMs);
  return format(date, "dd/MM/yyyy");
};
