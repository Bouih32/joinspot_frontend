import { getHeaderData, getUserTickets } from "@/actions/getUserData";
import MobileTickets from "@/components/profileUi/MobileTickets";
import NoActivity from "@/components/profileUi/NoActivity";
import TicketCards from "@/components/profileUi/TicketCards";
import { TicketT } from "@/libs/types";

export default async function TicketPage() {
  const tickets = (await getUserTickets()) as TicketT[];
  const user = await getHeaderData();

  return (
    <main className="w-full py-10 pl-2 laptop:pl-6">
      {tickets.length === 0 ? (
        <NoActivity />
      ) : (
        <>
          <TicketCards tickets={tickets} user={user} />
          <MobileTickets tickets={tickets} user={user} />
        </>
      )}
    </main>
  );
}
