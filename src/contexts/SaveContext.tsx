"use client";

import { createContext, ReactNode } from "react";

type SaveContextT = {};

export const SaveProvider = createContext<SaveContextT | null>(null);

export default function SaveContext({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
