import { getJoinedUsers } from "@/actions/userActions";
import { joinedT } from "@/libs/types";
import { cn } from "@/libs/utils";
import { nanoid } from "nanoid";
import { AiFillDollarCircle, AiOutlineQrcode } from "react-icons/ai";
import {
  BsFillPersonFill,
  BsFillPostcardFill,
  BsTicketFill,
} from "react-icons/bs";
import { PiUsersFill } from "react-icons/pi";
import placeholder from "../../../../../public/images/avatar_placeholder.jpg";
import JoinedCard from "@/components/profileUi/JoinedCard";
import MarkAsUsed from "@/components/profileUi/MarkAsUsed";
import Link from "next/link";
import NoActivity from "@/components/profileUi/NoActivity";

export default async function JoinedPage() {
  const tickets = (await getJoinedUsers()) as joinedT[];
  return (
    <main className="w-full space-y-6 pt-4 tablet:space-y-[56px] tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <div className="flex items-center gap-2 text-14xxl text-neutralDarkHover tablet:text-16xxl laptop:text-20xxl">
        <PiUsersFill className="text-main" />
        <p>Users that joined your activities</p>
      </div>

      {tickets.length > 0 ? (
        <>
          <section className="relative hidden pb-10 tablet:block">
            <div className="mb-6 grid w-full grid-cols-2 tablet:grid-cols-5">
              {/* Header Row */}
              <div className="border-b border-neutralLightActive py-2 text-left text-14sm font-semibold text-neutral">
                <div className="flex items-center gap-[6px]">
                  <BsFillPersonFill />
                  Client profile
                </div>
              </div>
              <div className="border-b border-neutralLightActive py-2 pl-3 text-left text-14sm font-semibold text-neutral">
                <div className="flex items-center gap-[6px]">
                  <AiOutlineQrcode />
                  Ticket code
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
                  <BsTicketFill />
                  Tickets
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
                <div
                  key={nanoid()}
                  className="grid w-full grid-cols-5 items-center bg-[#F8F8F8]"
                >
                  <Link
                    href={`/profile/${ele.userId}`}
                    className="flex items-center gap-3 bg-[#F8F8F8] pl-3 text-12lg text-neutral tablet:text-14lg laptop:text-16lg"
                  >
                    <div
                      style={{
                        backgroundImage: `url(${ele.avatar ? ele.avatar : placeholder})`,
                      }}
                      className="h-[38px] w-[38px] rounded-full bg-red-300 bg-cover bg-center bg-no-repeat"
                    ></div>
                    <h3 className="line-clamp-1 w-[120px] overflow-hidden text-14lg text-neutralDarkHover laptop:text-16lg">
                      {ele.userName}
                    </h3>
                  </Link>
                  <div className="bg-[#F8F8F8] py-4 text-12lg text-neutral tablet:text-14lg laptop:text-16lg">
                    {ele.code}
                  </div>
                  <div className="bg-[#F8F8F8] py-4 text-12lg text-neutral tablet:text-14lg laptop:text-16lg">
                    <p className="line-clamp-1 w-[140px] overflow-hidden">
                      {ele.title}
                    </p>
                  </div>
                  <div
                    className={cn(
                      "bg-[#F8F8F8] py-4 text-12lg text-neutral tablet:text-14lg laptop:text-16lg",
                    )}
                  >
                    {ele.used ? (
                      <p className="text-main">Ticket Used</p>
                    ) : (
                      <p> {ele.quantity} places</p>
                    )}
                  </div>
                  <div className="bg-[#F8F8F8] py-4 pr-3 text-12lg text-neutral tablet:text-14lg laptop:text-16lg">
                    <div className="flexBetween">
                      <p> {ele.payed}$</p>
                      <MarkAsUsed id={ele.id} used={ele.used} />
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </section>
          <section className="pb-10 tablet:hidden">
            <div className="mb-3 flex items-center gap-[6px] border-b border-neutralLightActive py-2 text-left text-12sm font-semibold text-neutral">
              <div className="flex items-center gap-[6px]">
                <BsFillPersonFill />
                Client profile
              </div>
            </div>

            <section className="space-y-2">
              {tickets.map((ele) => (
                <JoinedCard key={nanoid()} ele={ele} />
              ))}
            </section>
          </section>
        </>
      ) : (
        <NoActivity user />
      )}
    </main>
  );
}
