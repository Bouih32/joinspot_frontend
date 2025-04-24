import { AiFillDollarCircle } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import Pagination from "../Pagination";
import NoActivity from "../profileUi/NoActivity";
import PaymentCard from "./PaymentCard";
import PaymentMobile from "./PaymentMobile";
import { getUserPayments } from "@/actions/userActions";
import { nanoid } from "nanoid";
import { Payments } from "@/libs/types";

export default async function PaymentsWrapper({
  params,
}: {
  params: {
    search: string;
    page: string;
  };
}) {
  const data = await getUserPayments(params);

  return data.length > 0 ? (
    <section className="flex h-full flex-col justify-between gap-5 pb-5">
      <section className="space-y-[18px]">
        <div className="flexBetween border-b border-neutralLightActive py-2 text-left text-14sm font-semibold text-neutral">
          <div className="flex items-center gap-[10px]">
            <BsFillPersonFill />
            User
          </div>

          <div className="flex items-center gap-[10px]">
            <AiFillDollarCircle />
            Payment info
          </div>
        </div>

        {data.map((ele: Payments) => (
          <PaymentCard key={nanoid()} data={ele} />
        ))}

        {data.map((ele: Payments) => (
          <PaymentMobile key={nanoid()} data={ele} />
        ))}
      </section>
      <Pagination pages={3} page={params.page ? parseInt(params.page) : 1} />
    </section>
  ) : (
    <NoActivity user />
  );
}
