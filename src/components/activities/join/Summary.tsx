import Image from "next/image";
import TicketsNumber from "./TicketsNumber";
import { JoinContextP } from "@/contexts/JoinContext";
import { getContext } from "@/libs/utils";

export type SummaryProps = {
  handleQuantity: (count: number) => void;
};

export default function Summary({ handleQuantity }: SummaryProps) {
  const { activity, count } = getContext(JoinContextP);
  return (
    <section className="talet:w-[354px] w-full select-none space-y-4 laptop:w-[416px]">
      <TicketsNumber handleQuantity={handleQuantity} />

      <div className="space-y-6 rounded-[12px] bg-secondLight p-3 tablet:p-5">
        <Image
          src={activity.coverPic}
          alt="activity cover"
          height={328}
          width={376}
          className="h-[303px] w-full rounded-xl tablet:h-[251px] laptop:h-[328px]"
        />
        <div className="border-b-[2px] border-secondLightActive pb-2 text-14sm text-neutral tablet:text-16sm">
          <h3 className="text-20lg text-main">Order Summary</h3>
          <p className="">{activity.title}</p>
          <div className="flexBetween font-medium">
            <p>{count} x General Admission</p>
            <span>{activity.price} MAD</span>
          </div>
        </div>
        <div className="flexBetween text-14lg font-medium text-neutral tablet:text-16lg">
          <p>Total</p>
          <span className="text-main">{count * activity.price} MAD</span>
        </div>
      </div>
    </section>
  );
}
