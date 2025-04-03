import { formatDate } from "@/libs/utils";
import { MessageT } from "@/libs/types";
import placeholder from "../../../../public/images/avatar_placeholder.jpg";

export default function SenderUi({ data }: { data: MessageT }) {
  return (
    <div className="flex items-center gap-[6px] tablet:gap-[15px]">
      <div
        style={{
          backgroundImage: `url(${data.message_from.avatar ? data.message_from.avatar : placeholder})`,
        }}
        className="h-[26px] w-[26px] rounded-full bg-red-300 bg-cover bg-center bg-no-repeat tablet:h-[42px] tablet:w-[42px] laptop:h-[47px] laptop:w-[47px]"
      ></div>
      <div className="">
        <h3 className="text-16xl text-main">{data.message_from.userName}</h3>
        <p className="text-[8px] font-semibold text-neutralActive">
          {formatDate(data.createdAt)}
        </p>
      </div>
    </div>
  );
}
