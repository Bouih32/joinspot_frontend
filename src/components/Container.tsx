import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="laptop:w-[1224px] mx-auto w-[328px] lg:w-[864px]">
      {children}
    </div>
  );
}
