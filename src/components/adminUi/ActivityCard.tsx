import { formatDate } from "@/libs/utils";
import BanActivity from "./BanActivity";
import { activeT } from "@/app/(profile)/admin/activities/page";
import UnBanActivity from "./UnbanActivity";

export default function ActivityCard({ ele }: { ele: activeT }) {
  const date = formatDate(ele.endDay).split(".");
  return (
    <div className="grid w-full grid-cols-4">
      <div className="bg-[#F8F8F8] py-4 pl-3 text-12lg text-neutralDarkHover tablet:text-14lg laptop:text-16lg">
        <p className="line-clamp-1 w-[200px] overflow-hidden tablet:w-[130px]">
          {ele.title}
        </p>
      </div>
      <div className="bg-[#F8F8F8] py-4 text-12lg text-neutralDarkHover tablet:text-14lg laptop:text-16lg">
        {ele.totalTickets}{" "}
        <span className="text-[12px] font-light text-neutralHover">
          Clients
        </span>
      </div>
      <div className="bg-[#F8F8F8] py-4 text-12lg text-neutralDarkHover tablet:text-14lg laptop:text-16lg">
        {date[1]}{" "}
        <span className="text-[12px] font-light text-neutralHover">
          {date[0]}
        </span>
      </div>
      <div className="flex items-center justify-between bg-[#F8F8F8] py-4 pr-3 text-12lg text-neutralDarkHover tablet:text-14lg laptop:text-16lg">
        {ele.totalRevenue}$
        {!ele.deletedAt ? (
          <BanActivity id={ele.activityId} />
        ) : (
          <UnBanActivity id={ele.activityId} />
        )}
      </div>
    </div>
  );
}
