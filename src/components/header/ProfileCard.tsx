import { cn } from "@/libs/utils";
import Link from "next/link";
import { ReactElement } from "react";

type ProfileCardProps = {
  icon: ReactElement;
  title: string;
  href: string;
  index: number;
};

export default function ProfileCard({
  icon,
  title,
  href,
  index,
}: ProfileCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-1 text-neutral",
        index === 0 && "pb-3 text-main",
        index === 3 && "border-t border-neutralLightHover pt-2.5",
      )}
    >
      {icon}
      <h2 className="text-10lg laptop:text-12lg">{title}</h2>
    </Link>
  );
}
