import { ReactNode } from "react";

export default function MainTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-16xl text-main tablet:text-28xl laptop:text-40xl">
      {children}
    </h1>
  );
}
