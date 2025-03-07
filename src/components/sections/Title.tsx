import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-16xl text-mainHover tablet:text-40xl">{children}</h3>
  );
}
