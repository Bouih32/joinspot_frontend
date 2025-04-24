import { avatarPlaceholder } from "@/libs/constantes";
import Button from "../Button";

export default function PaymentCard() {
  return (
    <div className="grid w-full grid-cols-4">
      <div className="w flex items-center gap-3 bg-[#F8F8F8] pl-3 text-12lg text-neutral tablet:text-14lg laptop:text-16lg">
        <div
          style={{
            backgroundImage: `url(${avatarPlaceholder})`,
          }}
          className="h-[28px] w-[28px] rounded-full bg-red-300 bg-cover bg-center bg-no-repeat"
        ></div>
        <p className="line-clamp-1 w-[100px] overflow-hidden text-nowrap text-14lg text-neutralDarkHover laptop:text-16lg">
          Othmane
        </p>
      </div>
      <div className="bg-[#F8F8F8] py-4 text-12lg text-neutralDarkHover tablet:text-14lg laptop:text-16lg">
        <p> 10034500065...</p>
      </div>
      <div className="bg-[#F8F8F8] py-4 text-12lg text-neutralDarkHover tablet:text-14lg laptop:text-16lg">
        <p>CIH Bank</p>
      </div>
      <div className="flex items-center justify-between bg-[#F8F8F8] py-4 pr-3 text-12lg text-neutralDarkHover tablet:text-14lg laptop:text-16lg">
        200$
        <Button>Pay</Button>
      </div>
    </div>
  );
}
