import { UserProfileT } from "@/libs/types";
import Stats from "./Stats";
import { nanoid } from "nanoid";

export default function StatsHolder({ userData }: { userData: UserProfileT }) {
  const statInfo = [
    { stat: userData.activityNumber, title: "Activities" },
    { stat: userData.followersNum, title: "Followers" },
    { stat: userData.followingNum, title: "Following" },
  ];
  return (
    <div className="flex gap-2.5 tablet:gap-5">
      {statInfo.map((ele) => (
        <Stats key={nanoid()} stat={ele.stat} title={ele.title} />
      ))}
    </div>
  );
}
