import SenderUi from "./SenderUi";
import { MessageT } from "@/libs/types";
import { cn } from "@/libs/utils";
import MessageDetails from "./MessageDetails";
import DeleteMessage from "./DeleteMessage";

export default function MessageCard({ data }: { data: MessageT }) {
  return (
    <section
      className={cn(
        "flexBetween group w-full flex-col gap-[15px] rounded bg-neutralLight px-[6px] py-[14px] tablet:flex-row tablet:rounded-[8px] tablet:px-3 tablet:py-2",
        !data.read && "bg-mainLightHover",
      )}
    >
      <div className="flex items-center gap-2 tablet:gap-2.5 laptop:gap-8">
        <SenderUi data={data} />
        <p className="line-clamp-2 w-[172px] overflow-hidden border-l-[0.5px] border-neutralActive pl-2.5 text-[8px] font-semibold leading-[16px] text-neutralDarkHover group-hover:text-darker tablet:w-[312px] tablet:text-[12px] laptop:w-[511px]">
          {data.content}
        </p>
      </div>

      <div className="flex items-center gap-3 self-end text-neutralDark tablet:self-auto">
        <DeleteMessage messageId={data.messageId} />
        <MessageDetails messageId={data.messageId} />
      </div>
    </section>
  );
}
