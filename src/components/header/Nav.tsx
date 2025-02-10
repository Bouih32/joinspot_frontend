import { cn } from "@/libs/utils";

export default function Nav({ classname }: { classname?: string }) {
  return (
    <nav className={cn(classname)}>
      <ul className="tablet:flexCenter flex flex-col gap-3 text-14lg tablet:flex-row tablet:gap-[15px] laptop:gap-5 laptop:text-16lg">
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>ACTIVITIES</li>
        <li>COMMUNETY</li>
        <li>SUPPORT</li>
      </ul>
    </nav>
  );
}
