import { getActive } from "@/actions/userActions";
import { activeT } from "@/app/(profile)/user/active/page";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsFillPostcardFill } from "react-icons/bs";
import { PiUsersFill } from "react-icons/pi";
import ActiveCard from "./ActiveCard";
import { nanoid } from "nanoid";
import MobileActive from "./MobileActive";
import NoActivity from "./NoActivity";

export default async function ActiveWrapper() {
  const activeActivities = (await getActive()) as activeT[];
  return activeActivities.filter((ele) => ele.deletedAt === null).length > 0 ? (
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
        <section className="w-full space-y-2 pb-10">
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

        <section className="space-y-2 pb-10">
          {activeActivities.map((ele) => (
            <MobileActive key={nanoid()} ele={ele} />
          ))}
        </section>
      </section>
    </>
  ) : (
    <NoActivity />
  );
}
