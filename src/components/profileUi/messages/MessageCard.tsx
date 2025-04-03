import { BiSolidTrash } from "react-icons/bi";
import SenderUi from "./SenderUi";
import { IoSend } from "react-icons/io5";
import { MessageT } from "@/libs/types";

export default function MessageCard({ data }: { data: MessageT }) {
  return (
    <section className="flexBetween group flex-col gap-[15px] rounded bg-neutralLight px-[6px] py-[14px] hover:bg-mainLightHover tablet:flex-row tablet:rounded-[8px] tablet:px-3 tablet:py-2">
      <div className="flex items-center gap-2 tablet:gap-2.5 laptop:gap-8">
        <SenderUi data={data} />
        <p className="line-clamp-2 w-[172px] overflow-hidden border-l-[0.5px] border-neutralActive pl-2.5 text-[8px] font-semibold leading-[16px] text-neutralDarkHover group-hover:text-darker tablet:w-[312px] tablet:text-[12px] laptop:w-[511px]">
          {data.content}
        </p>
      </div>

      <div className="flex items-center gap-3 self-end text-neutralDark tablet:self-auto">
        <BiSolidTrash className="cursor-pointer hover:text-main" />
        <IoSend className="cursor-pointer hover:text-main" />
      </div>
    </section>
  );
}
