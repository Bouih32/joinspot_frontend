import { getActive } from "@/actions/userActions";
import ActiveCard from "@/components/profileUi/ActiveCard";
import MobileActive from "@/components/profileUi/MobileActive";
import NoActivity from "@/components/profileUi/NoActivity";
import { nanoid } from "nanoid";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsFillPostcardFill, BsPostcardFill } from "react-icons/bs";
import { PiUsersFill } from "react-icons/pi";

export type activeT = {
  endDay: string;
  title: string;
  totalTickets: any;
  totalRevenue: number;
};

export default async function ActivePage() {
  const activeActivities = (await getActive()) as activeT[];
  return (
    <main className="w-full space-y-6 pt-4 tablet:space-y-[56px] tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <div className="flex items-center gap-2 text-14xxl text-neutralDarkHover tablet:text-16xxl laptop:text-20xxl">
        <BsPostcardFill className="text-main" />
        <p>Your live activities</p>
      </div>

      {activeActivities.length > 0 ? (
        <>
          <section className="relative hidden w-full tablet:block">
            <div className="mb-6 grid w-full grid-cols-2 tablet:grid-cols-4">
              {/* Header Row */}
              <div className="border-b border-neutralLightActive py-2 pl-3 text-left text-14sm font-semibold text-neutral">
                <div className="flex items-center gap-[6px]">
                  <BsFillPostcardFill />
                  Activity
                </div>
              </div>
              <div className="border-b border-neutralLightActive py-2 text-left text-14sm font-semibold text-neutral">
                <div className="flex items-center gap-[6px]">
                  <PiUsersFill />
                  People joined
                </div>
              </div>
              <div className="border-b border-neutralLightActive py-2 text-left text-14sm font-semibold text-neutral">
                <div className="flex items-center gap-[6px]">
                  <BiSolidTimeFive />
                  Finishes at
                </div>
              </div>

              <div className="border-b border-neutralLightActive py-2 text-left text-14sm font-semibold text-neutral">
                <div className="flex items-center gap-[6px]">
                  <AiFillDollarCircle />
                  Total gain
                </div>
              </div>

              {/* Data Row */}
            </div>
            <section className="w-full space-y-2">
              {activeActivities.map((ele) => (
                <ActiveCard key={nanoid()} ele={ele} />
              ))}
            </section>
          </section>
          <section className="tablet:hidden">
            <div className="mb-3 flex items-center gap-[6px] border-b border-neutralLightActive py-2 text-left text-12sm font-semibold text-neutral">
              <BsFillPostcardFill />
              Activity
            </div>

            <section className="space-y-2">
              {activeActivities.map((ele) => (
                <MobileActive key={nanoid()} ele={ele} />
              ))}
            </section>
          </section>
        </>
      ) : (
        <NoActivity />
      )}
    </main>
  );
}
