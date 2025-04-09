import { getAdminRevenue } from "@/actions/userActions";
import RevenueCard from "@/components/profileUi/RevenueCard";
import { nanoid } from "nanoid";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsFillPostcardFill } from "react-icons/bs";
import { IoWallet } from "react-icons/io5";

export default async function AdminPage() {
  const revenue = (await getAdminRevenue()) as {
    title: string | undefined;
    totalRevenue: number;
  }[];
  return (
    <main className="w-full space-y-6 pt-4 tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <div className="flex items-center gap-2 text-14xxl text-neutralDark tablet:text-16xxl laptop:text-20xxl">
        <IoWallet className="text-main" />
        <p>Joinspots Fees</p>
      </div>

      <section className="space-y-3">
        <div className="flexBetween border-b border-neutralLightActive px-3 py-2 text-left text-14sm font-semibold text-neutral">
          <div className="flex items-center gap-[6px]">
            <BsFillPostcardFill />
            Activity
          </div>

          <div className="flex items-center gap-[6px]">
            <AiFillDollarCircle />
            Fees
          </div>
        </div>

        {revenue.map((ele) => (
          <RevenueCard data={ele} key={nanoid()} />
        ))}
      </section>
    </main>
  );
}
