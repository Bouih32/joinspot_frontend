import { LiaUser } from "react-icons/lia";
import { BiSolidCheckCircle } from "react-icons/bi";
import { LiaUserTieSolid } from "react-icons/lia";

type RoleProps = {
  role: "visitor" | "organiser";
};

export default function Role({ role }: RoleProps) {
  return (
    <div className="group relative h-[59px] w-[156px] cursor-pointer rounded-[60px] border-main bg-mainLightActive pt-4 text-center font-openSans transition-all duration-75 hover:border-[2px] tablet:h-[107px] tablet:w-[200px] tablet:pt-[35px]">
      <div className="gridCenter absolute left-[50%] top-0 h-[41.869px] w-[41.869px] -translate-x-[50%] -translate-y-[60%] rounded-full border-[2px] border-main bg-white tablet:h-[54px] tablet:w-[54px] tablet:-translate-y-[30%]">
        {role === "visitor" ? (
          <LiaUser className="text-[32px] text-main" />
        ) : (
          <LiaUserTieSolid className="text-[32px] text-main" />
        )}
        <div className="absolute -right-[10%] top-[5%] hidden rounded-full bg-white text-main group-hover:block tablet:right-0">
          <BiSolidCheckCircle />
        </div>
      </div>

      <h3 className="tablet:text-16xxl text-12lg font-semibold text-main first-letter:uppercase">
        {role}
      </h3>
      {role === "visitor" ? (
        <p className="text-[8px] leading-[10px] text-neutralDarkHover tablet:text-12sm">
          Explore activities and connect <br /> with our community.
        </p>
      ) : (
        <p className="text-[8px] leading-[10px] text-neutralDarkHover tablet:text-12sm">
          Benefice of organising your <br />
          activities with us
        </p>
      )}
    </div>
  );
}
