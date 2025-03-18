import { clsx, type ClassValue } from "clsx";
import { Context, useContext } from "react";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { unstable_cache } from "next/cache";
import { getCategoriesServer } from "@/actions/getCategory";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

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
  router: AppRouterInstance,
) {
  const newParam = new URLSearchParams(searchParams.toString());
  if (newParam.get(param) === value) {
    newParam.delete(param);
  } else {
    newParam.set(param, value);
  }

  router.push(`?${newParam.toString()}`);
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

export const getCachedCategories = async () => {
  const getCachedCategories = unstable_cache(
    getCategoriesServer,
    ["category-server"],
    {
      tags: ["category-server"],
      revalidate: false,
    },
  );

  const categories = await getCachedCategories();
  return categories;
};

export const convertToISODate = (dateString: string): string => {
  const [day, month, year] = dateString.split("/").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day)); // Ensure UTC time
  return date.toISOString();
};
