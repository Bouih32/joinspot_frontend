import { BiSolidInfoCircle } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { PiUsersFill } from "react-icons/pi";
import placeholder from "../../../../../public/images/avatar_placeholder.jpg";
import Button from "@/components/Button";
import { FaBan } from "react-icons/fa";

export default function UsersPage() {
  return (
    <main className="w-full space-y-6 pt-4 tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <div className="flex items-center gap-2 text-14xxl text-neutralDark tablet:text-16xxl laptop:text-20xxl">
        <PiUsersFill className="text-main" />
        <p>Joinspots Users</p>
      </div>

      <section className="space-y-3">
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

        <section className="flex justify-between tablet:items-center">
          <div className="flex gap-3 text-12lg text-neutral tablet:items-center tablet:text-14lg laptop:text-16lg">
            <FaBan className="text-error" />

            <div
              style={{
                backgroundImage: `url(${placeholder})`,
              }}
              className="h-[28px] w-[28px] rounded-full bg-red-300 bg-cover bg-center bg-no-repeat"
            ></div>
            <h3 className="line-clamp-1 w-[120px] overflow-hidden text-14lg text-neutralDarkHover laptop:text-16lg">
              Othmane
            </h3>
          </div>
          <div className="flex flex-col-reverse items-end gap-4 tablet:flex-row tablet:items-center tablet:divide-x-2">
            <Button
              classname="bg-errorHover px-1 tablet:p-[6px] text-error text-nowrap  flex-row-reverse"
              icon={<FaBan />}
            >
              Suspend account
            </Button>
            <p className="text-12sm text-neutral tablet:pl-4 tablet:text-16lg">
              Member since 2023
            </p>
          </div>
        </section>

        {/* {revenue.map((ele) => (
            <RevenueCard data={ele} key={nanoid()} />
          ))} */}
      </section>
    </main>
  );
}
