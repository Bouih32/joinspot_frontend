import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdLocationOn, MdPeopleAlt } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";
import Save from "../Save";
import { editActT } from "@/libs/types";
import { nanoid } from "nanoid";

type OverviewProps = {
  activity: editActT;
  userId: string | undefined;
};

export default function Overview({ activity, userId }: OverviewProps) {
  const link =
    activity.userId === userId ? "user" : `/profile/${activity.userId}`;

  return (
    <section className="flex flex-col-reverse gap-4 overflow-hidden rounded-xl bg-secondLight p-3 shadow-8xl tablet:flex-row tablet:gap-0 tablet:p-0">
      <div className="tablet:rounded-0 rounded-[8px] tablet:h-[379px] tablet:w-[400px] laptop:w-[610px]">
        <Image
          src={activity.coverPic}
          alt="placeholder"
          width={610}
          height={493}
          className="h-full w-full"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-4 tablet:px-[35px]">
        <div className="space-y-[14px]">
          <h1 className="text-16xxl text-main laptop:text-26xxl">
            {activity.title}
          </h1>
          <div className="flexBetween">
            <Link href={link} className="flexCenter gap-2">
              <Image
                src={activity.avatar}
                alt="avatar"
                height={38}
                width={38}
                className="h-[46px] w-[46px] rounded-full object-cover object-center"
              />
              <div className="flex flex-col">
                <h1 className="text-14xl text-darker">{activity.userName}</h1>
                <span className="text-12xl text-neutralDark">
                  {activity.category}
                </span>
              </div>
            </Link>
            <div className="flexCenter gap-2">
              <Save id={activity.activityId} />
              <div className="z-40 w-fit cursor-pointer rounded-md bg-white p-[5px] text-main">
                <FaShareSquare />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            {activity.tags.map((ele) => (
              <p
                key={nanoid()}
                className="h-[22px] w-fit rounded-[20px] bg-second px-2.5 text-14sm text-white first-letter:uppercase"
              >
                {ele.tagName}
              </p>
            ))}
          </div>
        </div>
        <div className="space-y-4 text-12xxl text-secondActive">
          <h1 className="text-14xl text-main laptop:text-20xl">
            Quick Overview
          </h1>
          <div className="flex items-center justify-start gap-2 pl-1">
            <MdLocationOn className="text-[24px]" />
            <p className="first-letter:uppercase">
              {activity.city},{activity.location}{" "}
            </p>
          </div>
          <div className="flex items-center justify-start gap-2 pl-2">
            <BsFillCalendarDateFill className="text-[18px]" />
            <p>
              {activity.startDay} – {activity.startTime}{" "}
            </p>
          </div>
          <div className="flex items-center justify-start gap-2 pl-2">
            <MdPeopleAlt className="text-[24px]" />
            <p>
              {activity.joined}/{activity.seat} joined{" "}
            </p>
          </div>
          <div className="flexBetween text-14xl text-main">
            <p>
              From {activity.price}DH{" "}
              <span className="text-12sm text-neutralDark">per person</span>
            </p>
            {activity.seat === activity.joined ? (
              <div>
                <Button disabled={activity.seat === activity.joined}>
                  Full
                </Button>
              </div>
            ) : (
              <div className="">
                {activity.userId === userId ? (
                  <Button disabled>Join</Button>
                ) : (
                  <Link href={`/activities/${activity.activityId}/payment`}>
                    <Button>Join</Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
