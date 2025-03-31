import { getUserTickets } from "@/actions/getUserData";
import { TicketT } from "@/libs/types";
import { nanoid } from "nanoid";
import { AiOutlineQrcode } from "react-icons/ai";

export default async function TicketPage() {
  const tickets = (await getUserTickets()) as TicketT[];
  console.log(tickets);
  return (
    <main className="w-full py-10 laptop:pl-6">
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
            <AiOutlineQrcode />
            Tickets
          </div>
        </div>
        <div className="border-b border-neutralLightActive py-2 text-left text-14sm font-semibold text-neutral">
          <div className="flex items-center gap-[6px]">
            <AiOutlineQrcode />
            Activity joined
          </div>
        </div>
        <div className="border-b border-neutralLightActive py-2 text-left text-14sm font-semibold text-neutral">
          <div className="flex items-center gap-[6px]">
            <AiOutlineQrcode />
            Activity Date
          </div>
        </div>
        <div className="border-b border-neutralLightActive py-2 text-left text-14sm font-semibold text-neutral">
          <div className="flex items-center gap-[6px]">
            <AiOutlineQrcode />
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
            <div className="bg-[#F8F8F8] py-4 text-12lg text-neutral tablet:text-14lg laptop:text-16lg">
              {ele.totalPaid}$
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
