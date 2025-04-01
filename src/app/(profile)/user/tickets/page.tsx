import { getUserTickets } from "@/actions/getUserData";
import MobileTickets from "@/components/profileUi/MobileTickets";
import TicketCards from "@/components/profileUi/TicketCards";
import { TicketT } from "@/libs/types";

export default async function TicketPage() {
  const tickets = (await getUserTickets()) as TicketT[];

  return (
    <main className="w-full py-10 pl-2 laptop:pl-6">
      <TicketCards tickets={tickets} />
      <MobileTickets tickets={tickets} />
    </main>
  );
}
