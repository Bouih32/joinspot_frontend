"use client";

import { ActivityDetailsT, UserT } from "@/libs/types";
import { createContext, ReactNode, useState } from "react";

type JoinContextT = {
  activity: ActivityDetailsT;
  count: number;
  handleArrows: (action: "add" | "minus") => void;
  user: UserT;
  handleCode: (code: string) => void;
  step: number;
  code: string | null;
};

type JointContextProps = {
  activity: ActivityDetailsT;
  children: ReactNode;
  user: UserT;
};
export const JoinContextP = createContext<JoinContextT | null>(null);
export default function JoinContext({
  activity,
  children,
  user,
}: JointContextProps) {
  const [count, setCount] = useState(1);
  const [code, setCode] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  const handleArrows = (action: "add" | "minus") => {
    setCount((prev) =>
      action === "add"
        ? prev < activity.seat - activity.joined
          ? prev + 1
          : prev
        : prev > 1
          ? prev - 1
          : 1,
    );
  };

  const handleCode = (code: string) => {
    setCode(code);
    setStep(2);
  };

  return (
    <JoinContextP.Provider
      value={{ activity, count, handleArrows, user, handleCode, step, code }}
    >
      {children}
    </JoinContextP.Provider>
  );
}
