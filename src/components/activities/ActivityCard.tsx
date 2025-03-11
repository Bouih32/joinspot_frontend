import { MdLocationOn, MdOutlineTurnedInNot } from "react-icons/md";
import UserCard from "./UserCard";
import ActivityDetails from "./ActivityDetails";
import Seats from "./Seats";
import Button from "../Button";
import { cn } from "@/libs/utils";

type ActivityCardProps = {
  hide?: boolean;
};

export default function ActivityCard({ hide }: ActivityCardProps) {
  return (
    <section
      className={cn(
        "flex min-w-[328px] flex-col-reverse gap-5 self-center justify-self-center overflow-hidden rounded-xl bg-secondLight px-3 py-[17px] tablet:h-[245px] tablet:min-w-[644px] tablet:flex-row tablet:gap-2.5 tablet:rounded-[8px] tablet:px-0 tablet:py-0",
        hide && "cover relative before:bg-white/50",
      )}
    >
      <div className="tablet:cover before:bg-activityGrad relative h-[177px] w-[304px] rounded-[8px] bg-activityImg bg-cover bg-center p-2 before:z-40 tablet:h-[245px] tablet:w-[274px] tablet:rounded-none">
        <section className="flexBetween">
          <div className="flexCenter z-50 w-fit gap-1 rounded bg-main px-3 py-[3px] font-openSans text-10xxl text-white tablet:px-4 tablet:py-[6px]">
            <MdLocationOn />
            <h3>Hello</h3>
          </div>
          <div className="z-50 w-fit cursor-pointer rounded-md bg-white p-[5px] text-main">
            <MdOutlineTurnedInNot />
          </div>
        </section>
      </div>
      <section className="flexCenter flex-1 tablet:pr-[29px]">
        <div className="w-full space-y-[6px]">
          <UserCard />
          <ActivityDetails />
          <Seats />
          <div className="flexBetween">
            <p className="text-10sm text-neutralDark">
              <span className="select-none text-14xxl text-main">
                From 150DH
              </span>
              per person
            </p>
            <Button>Join</Button>
          </div>
        </div>
      </section>
    </section>
  );
}
