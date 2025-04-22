import { getHeaderData, getUserTickets } from "@/actions/getUserData";
import TicketCards from "./TicketCards";
import MobileTickets from "./MobileTickets";
import NoActivity from "./NoActivity";
import { TicketT } from "@/libs/types";
import Pagination from "../Pagination";

export default async function TicketsWrapper({
  params,
}: {
  params: {
    search: string;
    page: string;
  };
}) {
  const [tickets, user] = await Promise.all([
    getUserTickets(params),
    getHeaderData(),
  ]);
  return tickets.strucuredData.length === 0 ? (
    <NoActivity />
  ) : (
    <section className="flex h-full flex-col justify-between gap-5 pb-5">
      <TicketCards tickets={tickets.strucuredData as TicketT[]} user={user} />
      <MobileTickets tickets={tickets.strucuredData as TicketT[]} user={user} />
      <Pagination
        pages={tickets.pages}
        page={params.page ? parseInt(params.page) : 1}
      />
    </section>
  );
}
