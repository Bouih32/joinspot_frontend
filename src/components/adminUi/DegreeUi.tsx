import { degreeT } from "@/libs/types";
import DegreeImage from "./DegreeImage";

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
        <DegreeImage linkPath={data.frontPic} title="Degree Front" />
        <DegreeImage linkPath={data.user.idFrontPic} title="id card front" />
        <DegreeImage linkPath={data.user.idFrontPic} title="id card back" />
      </div>
    </>
  );
}
