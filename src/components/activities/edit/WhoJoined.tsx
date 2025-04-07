import { getTicketsByActivity } from "@/actions/activityActions";
import Container from "@/components/Container";
import { activityTicket } from "@/libs/types";
import { nanoid } from "nanoid";
import Link from "next/link";
import { AiOutlineQrcode } from "react-icons/ai";
import { BsFillPersonFill, BsTicketFill } from "react-icons/bs";
import placeholder from "../../../../public/images/avatar_placeholder.jpg";

export default async function WhoJoined({ id }: { id: string }) {
  const joined = (await getTicketsByActivity(id)) as activityTicket[];
  return (
    <Container classname="laptop:p-[25px] tablet:p-4 space-y-5">
      <h3 className="text-14xl text-main laptop:text-20xl">Quick Overview</h3>
      <section className="pb-10">
        <div className="mb-6 grid w-full grid-cols-3">
          {/* Header Row */}
          <div className="border-b border-neutralLightActive py-2 text-left text-14sm font-semibold text-neutral">
            <div className="flex items-center gap-[6px]">
              <BsFillPersonFill />
              Client profile
            </div>
          </div>
          <div className="border-b border-neutralLightActive py-2 text-left text-14sm font-semibold text-neutral">
            <div className="flex items-center justify-center gap-[6px]">
              <BsTicketFill />
              Tickets
            </div>
          </div>
          <div className="border-b border-neutralLightActive py-2 pr-3 text-left text-14sm font-semibold text-neutral">
            <div className="flex items-center justify-end gap-[6px]">
              <AiOutlineQrcode />
              Ticket code
            </div>
          </div>

          {/* Data Row */}
        </div>
        <section className="space-y-2">
          {joined.map((ele) => (
            <div
              key={nanoid()}
              className="grid w-full grid-cols-3 items-center tablet:bg-[#F8F8F8]"
            >
              <Link
                href={`/profile/${ele.userId}`}
                className="flex items-center gap-3 text-12lg text-neutral tablet:bg-[#F8F8F8] tablet:pl-3 tablet:text-14lg laptop:text-16lg"
              >
                <div
                  style={{
                    backgroundImage: `url(${ele.avatar ? ele.avatar : placeholder})`,
                  }}
                  className="h-[22px] w-[22px] rounded-full bg-red-300 bg-cover bg-center bg-no-repeat tablet:h-[38px] tablet:w-[38px]"
                ></div>
                <h3 className="line-clamp-1 w-[61px] overflow-hidden text-14lg text-neutralDarkHover tablet:w-[140px] laptop:text-16lg">
                  {ele.userName}
                </h3>
              </Link>
              <div className="py-4 text-center text-12lg text-neutralDarkHover tablet:bg-[#F8F8F8] tablet:text-14lg laptop:text-16lg">
                <p> {ele.quantity} places</p>
              </div>
              <div className="py-4 pr-3 text-center text-12lg text-neutralDarkHover tablet:bg-[#F8F8F8] tablet:text-end tablet:text-14lg laptop:text-16lg">
                {ele.code}
              </div>
            </div>
          ))}
        </section>
      </section>
    </Container>
  );
}
