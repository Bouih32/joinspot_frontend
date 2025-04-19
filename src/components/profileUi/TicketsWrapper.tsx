import { getHeaderData, getUserTickets } from "@/actions/getUserData";
import TicketCards from "./TicketCards";
import MobileTickets from "./MobileTickets";
import NoActivity from "./NoActivity";
import { TicketT } from "@/libs/types";

export default async function TicketsWrapper() {
  const [tickets, user] = await Promise.all([
    getUserTickets(),
    getHeaderData(),
  ]);
  return tickets.length === 0 ? (
    <NoActivity />
  ) : (
    <>
      <TicketCards tickets={tickets as TicketT[]} user={user} />
      <MobileTickets tickets={tickets as TicketT[]} user={user} />
    </>
  );
}
