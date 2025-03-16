import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Pagination() {
  return (
    <section className="flexCenter text-12xxl gap-1 self-end text-darker tablet:text-16xxl">
      <MdKeyboardArrowLeft className="cursor-pointer text-[20px] text-neutral hover:text-neutralActive tablet:text-[24px]" />
      <div className="grid h-[30px] w-[30px] place-content-center rounded-full border border-main text-main tablet:h-10 tablet:w-10">
        1
      </div>
      <div className="grid h-[30px] w-[30px] place-content-center rounded-full border-main hover:border hover:text-main tablet:h-10 tablet:w-10">
        1
      </div>
      <div className="grid h-[30px] w-[30px] place-content-center rounded-full border-main hover:border hover:text-main tablet:h-10 tablet:w-10">
        1
      </div>
      <div className="grid h-[30px] w-[30px] place-content-center rounded-full border-main hover:border hover:text-main tablet:h-10 tablet:w-10">
        ...
      </div>
      <div className="grid h-[30px] w-[30px] place-content-center rounded-full border-main hover:border hover:text-main tablet:h-10 tablet:w-10">
        1
      </div>
      <MdKeyboardArrowRight className="cursor-pointer text-[20px] text-neutral hover:text-neutralActive tablet:text-[24px]" />
    </section>
  );
}
