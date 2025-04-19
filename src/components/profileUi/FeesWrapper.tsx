import { getAdminRevenue } from "@/actions/userActions";
import NoActivity from "./NoActivity";
import RevenueCard from "./RevenueCard";
import { nanoid } from "nanoid";
import { BsFillPostcardFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";

export default async function FeesWrapper() {
  const revenue = (await getAdminRevenue()) as {
    title: string | undefined;
    totalRevenue: number;
  }[];
  return revenue.length > 0 ? (
    <section className="space-y-3 pb-10">
      <div className="flexBetween border-b border-neutralLightActive px-3 py-2 text-left text-14sm font-semibold text-neutral">
        <div className="flex items-center gap-[6px]">
          <BsFillPostcardFill />
          Activity
        </div>

        <div className="flex items-center gap-[6px]">
          <AiFillDollarCircle />
          Fees
        </div>
      </div>

      {revenue.map((ele) => (
        <RevenueCard data={ele} key={nanoid()} />
      ))}
    </section>
  ) : (
    <NoActivity />
  );
}
