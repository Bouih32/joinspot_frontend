import { activeT } from "@/app/(profile)/user/active/page";
import { formatDate } from "@/libs/utils";

export default function ActiveCard({ ele }: { ele: activeT }) {
  const date = formatDate(ele.endDay).split(".");
  return (
    <div className="grid w-full grid-cols-4">
      <div className="bg-[#F8F8F8] py-4 pl-3 text-12lg text-neutralDarkHover tablet:text-14lg laptop:text-16lg">
        <p className="line-clamp-1 w-[200px] overflow-hidden text-ellipsis tablet:w-[130px]">
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
      <div className="bg-[#F8F8F8] py-4 text-12lg text-neutralDarkHover tablet:text-14lg laptop:text-16lg">
        {ele.totalRevenue}$
      </div>
    </div>
  );
}
