import { MdLocationOn, MdOutlineTurnedInNot } from "react-icons/md";
import UserCard from "./UserCard";
import ActivityDetails from "./ActivityDetails";
import placeholder from "../../../public/images/activityImg.jpg";
import Seats from "./Seats";
import Button from "../Button";
import { cn } from "@/libs/utils";

export type ActivityCardType = {
  activityId: string;
  coverPic: string;
  title: string;
  description: string;
  seat: number;
  price: number;
  score: number;
  categoryId: string;
  avatar: string;
  userName: string;
  city: string;
  category: string;
};

type ActivityCardProps = {
  hide?: boolean;
  full?: boolean;
  data: ActivityCardType;
};

export default function ActivityCard({ hide, full, data }: ActivityCardProps) {
  if (!data) {
    return null; // or show a loading state
  }
  return (
    <section
      className={cn(
        "flex min-w-[328px] select-none flex-col-reverse gap-5 self-center justify-self-center overflow-hidden rounded-xl bg-secondLight px-3 py-[17px] tablet:h-[245px] tablet:min-w-[644px] tablet:flex-row tablet:gap-2.5 tablet:rounded-[8px] tablet:px-0 tablet:py-0",
        hide && "cover relative before:bg-white/50",
        full && "tablet:w-full",
      )}
    >
      <div
        className={cn(
          `tablet:coverMore -before:right-5 relative h-[177px] w-[304px] rounded-[8px] bg-cover bg-bottom p-2 before:z-30 before:bg-activityGrad tablet:h-[245px] tablet:w-[274px] tablet:rounded-none`,
          full && "tablet:w-[287px] laptop:h-[319px] laptop:w-[475px]",
        )}
        style={{
          backgroundImage: `url(${data.coverPic ? data.coverPic : placeholder})`,
        }}
      >
        <section className="flexBetween">
          <div className="flexCenter z-40 w-fit gap-1 rounded bg-main px-3 py-[3px] font-openSans text-10xxl text-white tablet:px-4 tablet:py-[6px]">
            <MdLocationOn />
            <h3>{data.city}</h3>
          </div>
          <div className="z-40 w-fit cursor-pointer rounded-md bg-white p-[5px] text-main">
            <MdOutlineTurnedInNot />
          </div>
        </section>
      </div>
      <section className="flexCenter flex-1 tablet:pr-3">
        <div className="w-full space-y-[6px] laptop:space-y-[14px]">
          <UserCard
            avatar={data.avatar}
            userName={data.userName}
            category={data.category}
          />
          <ActivityDetails description={data.description} stars={data.score} />
          <Seats seat={data.seat} />
          <div className="flexBetween">
            <p className="text-10sm text-neutralDark">
              <span className="mr-1 select-none text-14xxl text-main">
                From {data.price}DH
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
