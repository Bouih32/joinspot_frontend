import { getAllUsers } from "@/actions/userActions";
import React from "react";
import { BiSolidInfoCircle } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { nanoid } from "nanoid";
import NoActivity from "./NoActivity";
import { UserT } from "@/app/(profile)/admin/users/page";
import UserCard from "../adminUi/UserCard";
import Pagination from "../Pagination";

export default async function UsersWrapper({
  params,
}: {
  params: {
    search: string;
    page: string;
  };
}) {
  const data = await getAllUsers(params);

  return data.users.length > 0 ? (
    <section className="flex h-full flex-col justify-between gap-5 pb-5">
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

        {data.users.map((ele: UserT) => (
          <UserCard key={nanoid()} data={ele} />
        ))}
      </section>
      <Pagination
        pages={data.pages}
        page={params.page ? parseInt(params.page) : 1}
      />
    </section>
  ) : (
    <NoActivity user />
  );
}
