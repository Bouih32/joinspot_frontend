import { getAdminRevenue } from "@/actions/userActions";
import NoActivity from "./NoActivity";
import RevenueCard from "./RevenueCard";
import { nanoid } from "nanoid";
import { BsFillPostcardFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import Pagination from "../Pagination";

type FeesT = {
  title: string | undefined;
  totalRevenue: number;
};

export default async function FeesWrapper({
  params,
}: {
  params: {
    search: string;
    page: string;
  };
}) {
  const revenue = await getAdminRevenue(params);

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
            Fees
          </div>
        </div>
        {revenue.activityRevenue.map((ele: FeesT) => (
          <RevenueCard data={ele} key={nanoid()} />
        ))}
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
