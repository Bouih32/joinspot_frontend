import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function ProgressBar() {
  return (
    <section className="tablet:flexBetween mt-5 hidden gap-10">
      <div className="grid h-[2px] w-[676px] grid-cols-4 bg-secondLightHover laptop:w-[1086.316px]">
        <div className="bg-main"></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
      <div className="laptop:flexCenter hidden gap-[20px]">
        <div className="grid h-[64px] w-[64px] cursor-pointer place-content-center rounded-full bg-secondLight text-[30px] text-main transition-all duration-75 hover:bg-main hover:text-white">
          <RiArrowLeftSLine />
        </div>
        <div className="grid h-[64px] w-[64px] cursor-pointer place-content-center rounded-full bg-secondLight text-[30px] text-main transition-all duration-75 hover:bg-main hover:text-white">
          <RiArrowRightSLine />
        </div>
      </div>
    </section>
  );
}
