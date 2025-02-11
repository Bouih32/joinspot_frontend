import { ReactNode } from "react";

export default function MainTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="tablet:text-28xl text-16xl text-main laptop:text-40xl">
      {children}
    </h1>
  );
}
