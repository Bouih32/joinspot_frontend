import { getUpdateStatus } from "@/actions/userActions";
import Link from "next/link";
import { RiVipCrown2Fill } from "react-icons/ri";

export default async function UpdateLink() {
  const status = await getUpdateStatus();
  return !status ? (
    <Link
      href="/upgrade"
      className="flexCenter w-fit cursor-pointer gap-2 rounded bg-main px-3 py-[3px] font-openSans text-14xl text-white outline-none disabled:pointer-events-none disabled:bg-secondLightActive tablet:px-4 tablet:py-[6px]"
    >
      <RiVipCrown2Fill className="tablet:text-[20px]" />
      <p>Upgrade Pro</p>
    </Link>
  ) : (
    <div className="flexCenter w-fit gap-2 rounded bg-main px-3 py-[3px] font-openSans text-14xl text-white outline-none disabled:pointer-events-none disabled:bg-secondLightActive tablet:px-4 tablet:py-[6px]">
      <p>Pending ...</p>
    </div>
  );
}
