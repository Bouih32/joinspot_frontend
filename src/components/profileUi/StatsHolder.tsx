import { UserProfileT } from "@/libs/types";
import Stats from "./Stats";
import { nanoid } from "nanoid";

type StatsHolderT = {
  activityNumber: number;
  followersNum: number;
  followingNum: number;
};
export default function StatsHolder({
  activityNumber,
  followersNum,
  followingNum,
}: StatsHolderT) {
  const statInfo = [
    { stat: activityNumber, title: "Activities" },
    { stat: followersNum, title: "Followers" },
    { stat: followingNum, title: "Following" },
  ];
  return (
    <div className="flex gap-2.5 tablet:gap-5">
      {statInfo.map((ele) => (
        <Stats key={nanoid()} stat={ele.stat} title={ele.title} />
      ))}
    </div>
  );
}
