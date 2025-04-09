import { IoWallet } from "react-icons/io5";
import DashCard from "./DashCard";
import { PiUsersFill } from "react-icons/pi";
import { BsPostcardFill } from "react-icons/bs";
import { nanoid } from "nanoid";
import { UserProfileT } from "@/libs/types";

type AdminNavProps = {
  data: UserProfileT;
};

export default function AdminNav({ data }: AdminNavProps) {
  const navContent = [
    {
      icon: <IoWallet />,
      link: "/admin/fees",
      title: "Fees",
      value: data.totalRevenue,
    },
    {
      icon: <PiUsersFill />,
      link: "/asmin/users",
      title: "Joinspots Users",
      value: data.joinedNum,
    },
    {
      icon: <BsPostcardFill />,
      link: "/admin/activities",
      title: "Joinspots activities",
      value: data.activeActivities,
    },
  ];
  return (
    <div className="flexCenter divide-x-[1px] overflow-hidden rounded-[8px] tablet:gap-2.5 tablet:rounded-none">
      {navContent.map((ele) => (
        <DashCard
          key={nanoid()}
          icon={ele.icon}
          title={ele.title}
          link={ele.link}
          value={ele.value}
        />
      ))}
    </div>
  );
}
