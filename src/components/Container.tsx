import { cn } from "@/libs/utils";
import { ReactNode } from "react";

export default function Container({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) {
  return (
    <div
      className={cn(
        "tablet:w-[864px] mx-auto w-[328px] laptop:w-[1224px]",
        classname,
      )}
    >
      {children}
    </div>
  );
}
