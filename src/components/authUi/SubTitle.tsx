import { ReactNode } from "react";

export default function SubTitle({ children }: { children: ReactNode }) {
  return (
    <p className="text-12sm text-secondActive tablet:text-14sm laptop:text-16sm">
      {children}
    </p>
  );
}
