import { cn } from "@/libs/utils";
import { ReactNode } from "react";

type SelectItemProps = {
  children: ReactNode;
  index: number;
  handleClick: () => void;
  classname?: string;
};

export default function SelectItem({
  children,
  index,
  handleClick,
  classname,
}: SelectItemProps) {
  return (
    <p
      className={cn(
        "cursor-pointer border-b-[2px] border-transparent px-2 py-[7px] transition-all duration-75 hover:border-main hover:bg-mainLight hover:font-bold hover:text-main tablet:px-3",
        index !== 0 && "border-t-[0.5px] border-t-neutral",
        classname,
      )}
      onClick={handleClick}
    >
      {children}
    </p>
  );
}
