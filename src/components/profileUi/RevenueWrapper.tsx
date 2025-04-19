import { nanoid } from "nanoid";
import RevenueCard from "./RevenueCard";
import NoActivity from "./NoActivity";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsFillPostcardFill } from "react-icons/bs";
import { getActivityTickets } from "@/actions/userActions";

export default async function RevenueWrapper() {
  const revenue = (await getActivityTickets()) as {
    title: string | undefined;
    totalRevenue: number;
  }[];
  return revenue.length > 0 ? (
    <section className="space-y-3">
      <div className="flexBetween border-b border-neutralLightActive px-3 py-2 text-left text-14sm font-semibold text-neutral">
        <div className="flex items-center gap-[6px]">
          <BsFillPostcardFill />
          Activity
        </div>

        <div className="flex items-center gap-[6px]">
          <AiFillDollarCircle />
          Revenue
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
