import { TicketT } from "@/libs/types";

import { nanoid } from "nanoid";

import MobileCard from "./MobileCard";
import { AiOutlineQrcode } from "react-icons/ai";

export default function MobileTickets({
  tickets,
  user,
}: {
  tickets: TicketT[];
  user: any;
}) {
  return (
    <section className="tablet:hidden">
      <div className="mb-3 flex items-center gap-[6px] border-b border-neutralLightActive py-2 text-left text-12sm font-semibold text-neutral">
        <AiOutlineQrcode />
        Ticket code
      </div>

      <section className="space-y-2">
        {tickets.map((ele) => (
          <MobileCard key={nanoid()} ele={ele} user={user} />
        ))}
      </section>
    </section>
  );
}
