import { IoWallet } from "react-icons/io5";
import DashCard from "./DashCard";
import { PiUsersFill } from "react-icons/pi";
import { BsPostcardFill } from "react-icons/bs";
import { nanoid } from "nanoid";

export default function OrganiserNav() {
  const navContent = [
    { icon: <IoWallet />, link: "/user/revenue", title: "Revenue" },
    {
      icon: <PiUsersFill />,
      link: "/user/joined",
      title: "Joined Users",
    },
    {
      icon: <BsPostcardFill />,
      link: "/user/active",
      title: "Active activities",
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
        />
      ))}
    </div>
  );
}
