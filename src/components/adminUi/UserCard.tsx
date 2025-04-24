import { FaBan } from "react-icons/fa";
import Suspend from "./Suspend";
import { UserT } from "@/app/(profile)/admin/users/page";
import UnSuspend from "./Unsuspend";
import { avatarPlaceholder } from "@/libs/constantes";

export default function UserCard({ data }: { data: UserT }) {
  return (
    <section className="flex items-start justify-between border-b border-neutralLightActive pb-4 tablet:items-center">
      <div className="flex flex-1 items-center gap-3 text-12lg text-neutral tablet:text-14lg laptop:text-16lg">
        {data.deletedAt && <FaBan className="text-error" />}

        <div
          style={{
            backgroundImage: `url(${data.avatar ? data.avatar : avatarPlaceholder})`,
          }}
          className="h-[28px] w-[28px] rounded-full bg-red-300 bg-cover bg-center bg-no-repeat"
        ></div>
        <p className="line-clamp-1 w-[100px] overflow-hidden text-ellipsis text-nowrap text-14lg text-neutralDarkHover tablet:w-[400px] laptop:text-16lg">
          {data.userName}
        </p>
      </div>
      <div className="flex flex-col-reverse items-end gap-4 tablet:flex-row tablet:items-center tablet:divide-x-2">
        {data.deletedAt ? (
          <UnSuspend userId={data.userId} userName={data.userName} />
        ) : (
          <Suspend userId={data.userId} userName={data.userName} />
        )}

        <p className="text-12sm text-neutral tablet:pl-4 tablet:text-16lg">
          Member since 2025
        </p>
      </div>
    </section>
  );
}
