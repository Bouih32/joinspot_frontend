import { degreeT } from "@/libs/types";
import Image from "next/image";

export default function DegreeUi({ data }: { data: degreeT }) {
  return (
    <>
      <div className="flex grid-cols-3 flex-col gap-3 tablet:grid tablet:divide-x-2">
        <div className="tablet:flexCenter flex-col gap-1">
          <h3 className="text-10lg text-neutralActive">School name</h3>
          <p className="text-10xxl text-darker">{data.school} </p>
        </div>
        <div className="tablet:flexCenter flex-col gap-1">
          <h3 className="text-10lg text-neutralActive">Degree name</h3>
          <p className="text-10xxl text-darker">{data.degreeName}</p>
        </div>
        <div className="tablet:flexCenter flex-col gap-1">
          <h3 className="text-10lg text-neutralActive">Year</h3>
          <p className="text-10xxl text-darker">{data.year}</p>
        </div>
      </div>
      <div className="flexCenter w-full flex-col gap-[22px] tablet:flex-row tablet:gap-6 laptop:gap-[25px]">
        <div className="flex w-full flex-col items-center space-y-[6px] text-center tablet:w-fit">
          <Image
            src={data.frontPic}
            alt="verification image"
            height={92}
            width={204}
            className="h-[92px] w-full rounded-[6px] object-cover tablet:w-[204px] laptop:w-[157px]"
          />
          <p className="text-10sm text-neutralActive">Degree Front</p>
        </div>

        <div className="flex w-full flex-col items-center space-y-[6px] text-center tablet:w-fit">
          <Image
            src={data.user.idFrontPic}
            alt="verification image"
            height={92}
            width={204}
            className="h-[92px] w-full rounded-[6px] object-cover tablet:w-[204px] laptop:w-[157px]"
          />
          <p className="text-10sm text-neutralActive">id card front</p>
        </div>
        <div className="flex w-full flex-col items-center space-y-[6px] text-center tablet:w-fit">
          <Image
            src={data.user.idFrontPic}
            alt="verification image"
            height={92}
            width={204}
            className="h-[92px] w-full rounded-[6px] object-cover tablet:w-[204px] laptop:w-[157px]"
          />
          <p className="text-10sm text-neutralActive">id card back</p>
        </div>
      </div>
    </>
  );
}
