import { IoWallet } from "react-icons/io5";
import DashCard from "./DashCard";
import { PiUsersFill } from "react-icons/pi";
import { BsPostcardFill } from "react-icons/bs";
import { nanoid } from "nanoid";
import { getAdminStats } from "@/actions/getUserData";

export default async function AdminNav() {
  const data = (await getAdminStats()) as {
    joinedNum: number;
    totalRevenue: number;
    activeActivities: number;
  };

  const navContent = [
    {
      icon: <IoWallet />,
      link: "/admin",
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
