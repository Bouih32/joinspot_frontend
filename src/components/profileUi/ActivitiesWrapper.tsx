import { nanoid } from "nanoid";
import NoActivity from "./NoActivity";
import MobileActivity from "../adminUi/MobileActivity";
import ActivityCard from "../adminUi/ActivityCard";
import { BsFillPostcardFill } from "react-icons/bs";
import { getAdminActivities } from "@/actions/userActions";
import { activeT } from "@/app/(profile)/admin/activities/page";
import { PiUsersFill } from "react-icons/pi";
import { BiSolidTimeFive } from "react-icons/bi";
import { AiFillDollarCircle } from "react-icons/ai";

export default async function ActivitiesWrapper() {
  const activeActivities = (await getAdminActivities()) as activeT[];
  return activeActivities.length > 0 ? (
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
            <ActivityCard key={nanoid()} ele={ele} />
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
            <MobileActivity key={nanoid()} ele={ele} />
          ))}
        </section>
      </section>
    </>
  ) : (
    <NoActivity />
  );
}
