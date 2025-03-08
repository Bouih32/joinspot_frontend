import { cn } from "@/libs/utils";
import { ReactNode } from "react";

export default function SubTitle({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) {
  return (
    <p
      className={cn(
        "text-14sm text-darker tablet:w-[417px] tablet:text-20sm laptop:w-[876px]",
        classname,
      )}
    >
      {children}
    </p>
  );
}
