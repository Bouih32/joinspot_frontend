import { getActivityById } from "@/actions/getActivities";
import { getHeaderData } from "@/actions/getUserData";
import { TicketT } from "@/libs/types";
import { formatTicketDate } from "@/libs/utils";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { nanoid } from "nanoid";
import { AiFillDollarCircle, AiOutlineQrcode } from "react-icons/ai";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsFillPostcardFill, BsTicketFill } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import DownloadTicket from "./DownloadTicket";

export default async function TicketCards({ tickets }: { tickets: TicketT[] }) {
  const user = await getHeaderData();

  return (
    <section className="relative hidden tablet:block">
      <div className="mb-6 grid w-full grid-cols-2 tablet:grid-cols-5">
        {/* Header Row */}
        <div className="border-b border-neutralLightActive py-2 pl-3 text-left text-14sm font-semibold text-neutral">
          <div className="flex items-center gap-[6px]">
            <AiOutlineQrcode />
            Ticket code
          </div>
        </div>
        <div className="border-b border-neutralLightActive py-2 text-left text-14sm font-semibold text-neutral">
          <div className="flex items-center gap-[6px]">
            <BsTicketFill />
            Tickets
          </div>
        </div>
        <div className="border-b border-neutralLightActive py-2 text-left text-14sm font-semibold text-neutral">
          <div className="flex items-center gap-[6px]">
            <BsFillPostcardFill />
            Activity joined
          </div>
        </div>
        <div className="border-b border-neutralLightActive py-2 text-left text-14sm font-semibold text-neutral">
          <div className="flex items-center gap-[6px]">
            <BiSolidTimeFive />
            Activity Date
          </div>
        </div>
        <div className="border-b border-neutralLightActive py-2 text-left text-14sm font-semibold text-neutral">
          <div className="flex items-center gap-[6px]">
            <AiFillDollarCircle />
            Total paid
          </div>
        </div>

        {/* Data Row */}
      </div>
      <section className="space-y-2">
        {tickets.map((ele) => (
          <div key={nanoid()} className="grid w-full grid-cols-5">
            <div className="bg-[#F8F8F8] py-4 pl-3 text-12lg text-neutral tablet:text-14lg laptop:text-16lg">
              {ele.code}
            </div>
            <div className="bg-[#F8F8F8] py-4 text-12lg text-neutral tablet:text-14lg laptop:text-16lg">
              {ele.quantity} tickets
            </div>
            <div className="bg-[#F8F8F8] py-4 text-12lg text-neutral tablet:text-14lg laptop:text-16lg">
              {ele.title}
            </div>
            <div className="bg-[#F8F8F8] py-4 text-12lg text-neutral tablet:text-14lg laptop:text-16lg">
              {ele.date}
            </div>
            <div className="flexBetween bg-[#F8F8F8] py-4 pr-3 text-12lg text-neutral tablet:text-14lg laptop:text-16lg">
              <div className="">{ele.totalPaid}$</div>
              <DownloadTicket myTicket={ele} user={user} />
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
