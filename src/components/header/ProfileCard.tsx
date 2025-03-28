import { cn } from "@/libs/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

type ProfileCardProps = {
  icon: ReactElement;
  title: string;
  href: string;
};

export default function ProfileCard({ icon, title, href }: ProfileCardProps) {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-1 text-neutral hover:text-main",
        pathName === href && "text-main",
      )}
    >
      {icon}
      <h2 className="text-10lg laptop:text-12lg">{title}</h2>
    </Link>
  );
}
