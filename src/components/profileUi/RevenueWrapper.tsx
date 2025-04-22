import { nanoid } from "nanoid";
import RevenueCard from "./RevenueCard";
import NoActivity from "./NoActivity";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsFillPostcardFill } from "react-icons/bs";
import { getActivityTickets } from "@/actions/userActions";
import Pagination from "../Pagination";

export default async function RevenueWrapper({
  params,
}: {
  params: {
    search: string;
    page: string;
  };
}) {
  const revenue = await getActivityTickets(params);
  return revenue.activityRevenue.length > 0 ? (
    <section className="flex h-full flex-col justify-between gap-5 pb-5">
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

        {revenue.activityRevenue.map(
          (ele: { title: string | undefined; totalRevenue: number }) => (
            <RevenueCard data={ele} key={nanoid()} />
          ),
        )}
      </section>
      <Pagination
        pages={revenue.pagination.totalPages}
        page={params.page ? parseInt(params.page) : 1}
      />
    </section>
  ) : (
    <NoActivity />
  );
}
