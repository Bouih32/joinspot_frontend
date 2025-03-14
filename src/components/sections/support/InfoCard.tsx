import { ReactElement } from "react";

type InfoCardProps = {
  icon: ReactElement;
  info: string;
};
export default function InfoCard({ icon, info }: InfoCardProps) {
  return (
    <div className="flexCenter flex-col gap-2.5 text-[24px] tablet:flex-row tablet:gap-[25px]">
      {icon}
      <p className="w-[188px] text-12sm tablet:w-[249px] tablet:text-16sm">
        {info}
      </p>
    </div>
  );
}
