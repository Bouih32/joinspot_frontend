import { ReactNode } from "react";

export default function SubTitle({ children }: { children: ReactNode }) {
  return <p className="text-14sm text-darker tablet:text-20sm">{children}</p>;
}
