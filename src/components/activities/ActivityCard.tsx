"use client";

import { MdLocationOn } from "react-icons/md";
import UserCard from "./UserCard";
import ActivityDetails from "./ActivityDetails";
import placeholder from "../../../public/images/activityImg.jpg";
import Seats from "./Seats";
import Button from "../Button";
import { cn } from "@/libs/utils";
import Save from "./Save";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
  joined: number;
  userId: string;
};

type ActivityCardProps = {
  hide?: boolean;
  full?: boolean;
  data: ActivityCardType;
  details?: boolean;
  userId: string | undefined;
};

export default function ActivityCard({
  hide,
  full,
  data,
  details,
  userId,
}: ActivityCardProps) {
  if (!data) {
    return null; // or show a loading state
  }

  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);

  const handleNavigation = () => {
    if (!isDragging) {
      router.push(`/activities/${data.activityId}`);
    }
  };

  return (
    <div
      onClick={handleNavigation}
      onPointerDown={() => setIsDragging(false)} // Reset when user starts touch
      onPointerMove={() => setIsDragging(true)} //
      className={cn(
        "flex h-[380px] w-[328px] cursor-pointer select-none flex-col-reverse gap-5 self-center justify-self-center overflow-hidden rounded-xl bg-secondLight px-3 py-[17px] tablet:h-[245px] tablet:w-[648px] tablet:flex-row tablet:gap-2.5 tablet:rounded-[8px] tablet:px-0 tablet:py-0",
        hide && "cover relative before:bg-white/50",
        full && "tablet:w-full",
        details && "tablet:w-full tablet:gap-[65px]",
      )}
    >
      <div
        className={cn(
          "tablet:coverMore relative h-[177px] w-[304px] rounded-[8px] bg-cover bg-bottom p-2 before:right-0 before:z-30 before:bg-activityGrad tablet:h-[245px] tablet:w-[274px] tablet:rounded-none tablet:before:right-[-5px]",
          full && "tablet:w-[287px] laptop:h-[319px] laptop:w-[475px]",
          details && "tablet:w-[429px] laptop:w-[688px]",
        )}
        style={{
          backgroundImage: `url(${data.coverPic ? data.coverPic : placeholder})`,
        }}
      >
        <section className="flexBetween">
          <div className="flexCenter z-40 w-fit gap-1 rounded bg-main px-3 py-[3px] font-openSans text-10xxl text-white tablet:py-[6px]">
            <MdLocationOn className="text-12sm tablet:text-16sm" />
            <h3 className="text-12xxl first-letter:uppercase tablet:text-14xxl">
              {data.city}
            </h3>
          </div>
          <Save id={data.activityId} />
        </section>
      </div>
      <section className="flexCenter flex-1 tablet:pr-3">
        <div className="w-full space-y-[6px] laptop:space-y-[14px]">
          <UserCard
            avatar={data.avatar}
            userName={data.userName}
            category={data.category}
            userId={data.userId}
            tokenId={userId}
          />
          <ActivityDetails title={data.title} stars={data.score} full={full} />
          <Seats seat={data.seat} joined={data.joined} />
          <div className="flexBetween">
            <p className="text-10sm text-neutralDark">
              <span className="mr-1 select-none text-14xxl text-main">
                From {data.price}DH
              </span>
              per person
            </p>

            {data.seat === data.joined ? (
              <div onClick={(e) => e.stopPropagation()}>
                <Button disabled={data.seat === data.joined}>Full</Button>
              </div>
            ) : (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/activities/${data.activityId}/payment`);
                }}
              >
                <Button>Join</Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
