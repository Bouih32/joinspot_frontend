import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-[328px] lg:w-[864px] xl:w-[1280px]">
      {children}
    </div>
  );
}
