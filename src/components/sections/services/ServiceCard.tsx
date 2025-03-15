import { ReactElement } from "react";
import { IoPeople } from "react-icons/io5";

type ServiceCardProps = {
  title: string;
  sub: string;
  icon: ReactElement;
};

export default function ServiceCard({ title, sub, icon }: ServiceCardProps) {
  return (
    <section className="flex flex-row items-start gap-5 laptop:flex-col laptop:gap-4">
      <div className="grid h-[46px] min-w-[46px] place-content-center rounded-[8px] bg-main text-[22px] text-white tablet:h-[58px] tablet:w-[58px] tablet:text-[34px]">
        {icon}
      </div>
      <div className="space-y-2 laptop:space-y-3">
        <h3 className="talet:text-[20px] text-[16px] font-semibold text-darker laptop:text-[24px]">
          {title}
        </h3>
        <p className="talet:text-[16px] text-[14px] text-neutral tablet:w-[204px] laptop:w-[270px] laptop:text-[18px]">
          {sub}
        </p>
      </div>
    </section>
  );
}
