import { getAllUsers } from "@/actions/userActions";
import React from "react";
import { BiSolidInfoCircle } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { nanoid } from "nanoid";
import NoActivity from "./NoActivity";
import { UserT } from "@/app/(profile)/admin/users/page";
import UserCard from "../adminUi/UserCard";

export default async function UsersWrapper() {
  const users = (await getAllUsers()) as UserT[];
  return users.length > 0 ? (
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
    </section>
  ) : (
    <NoActivity user />
  );
}
