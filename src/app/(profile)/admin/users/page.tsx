import { BiSolidInfoCircle } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { PiUsersFill } from "react-icons/pi";

import { getAllUsers } from "@/actions/userActions";
import UserCard from "@/components/adminUi/UserCard";
import { nanoid } from "nanoid";

export type UserT = {
  userId: string;
  userName: string;
  avatar: string;
  deletedAt: string;
};

export default async function UsersPage() {
  const users = (await getAllUsers()) as UserT[];
  return (
    <main className="w-full space-y-6 pt-4 tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <div className="flex items-center gap-2 text-14xxl text-neutralDark tablet:text-16xxl laptop:text-20xxl">
        <PiUsersFill className="text-main" />
        <p>Joinspots Users</p>
      </div>

      <section className="space-y-[18px]">
        <div className="flexBetween border-b border-neutralLightActive py-2 text-left text-14sm font-semibold text-neutral">
          <div className="flex items-center gap-[10px]">
            <BsFillPersonFill />
            User
          </div>

          <div className="flex items-center gap-[10px]">
            <BiSolidInfoCircle />
            Informations
          </div>
        </div>

        {users.map((ele) => (
          <UserCard key={nanoid()} data={ele} />
        ))}

        {/* {revenue.map((ele) => (
            <RevenueCard data={ele} key={nanoid()} />
          ))} */}
      </section>
    </main>
  );
}
