import { avatarPlaceholder } from "@/libs/constantes";
import Button from "../Button";
import { FaCopy } from "react-icons/fa";
import { Payments } from "@/libs/types";
import { cn } from "@/libs/utils";
import { IoMdAlert } from "react-icons/io";

export default function PaymentCard({ data }: { data: Payments }) {
  return (
    <div className="hidden w-full grid-cols-4 tablet:grid">
      <div className="w flex items-center gap-3 bg-[#F8F8F8] pl-3 text-12lg text-neutral tablet:text-14lg laptop:text-16lg">
        <div
          style={{
            backgroundImage: `url(${data.avatar ?? avatarPlaceholder})`,
          }}
          className="h-[28px] w-[28px] rounded-full bg-red-300 bg-cover bg-center bg-no-repeat"
        ></div>
        <p className="line-clamp-1 w-[100px] overflow-hidden text-ellipsis text-nowrap text-14lg text-neutralDarkHover laptop:text-16lg">
          {data.userName}
        </p>
      </div>
      <div className="flex items-center gap-2 bg-[#F8F8F8] py-4 text-12lg text-neutralDarkHover tablet:text-14lg laptop:text-16lg">
        <p
          className={cn(
            "line-clamp-1 w-[100px] overflow-hidden text-ellipsis",
            !data.rib && "text-error",
          )}
        >
          {data.rib ? data.rib : "no bank data"}
        </p>
        {data.rib ? <FaCopy /> : <IoMdAlert className="text-error" />}
      </div>
      <div className="flex items-center bg-[#F8F8F8] py-4 text-12lg text-neutralDarkHover tablet:text-14lg laptop:text-16lg">
        <p
          className={cn(
            "line-clamp-1 w-[100px] overflow-hidden text-ellipsis",
            !data.rib && "text-error",
          )}
        >
          {data.bankName ? data.bankName : "no bank data"}
        </p>
      </div>
      <div className="flex items-center justify-between bg-[#F8F8F8] py-4 pr-3 text-12lg text-neutralDarkHover tablet:text-14lg laptop:text-16lg">
        <p> {data.revenueAmount}$</p>
        <Button classname="bg-success">Pay</Button>
      </div>
    </div>
  );
}
