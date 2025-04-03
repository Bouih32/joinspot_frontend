import { getMessageDetails } from "@/actions/userActions";
import SenderUi from "@/components/profileUi/messages/SenderUi";
import { MessageT } from "@/libs/types";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export default async function MessagDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const message = (await getMessageDetails(id)) as MessageT;
  return (
    <main className="w-full space-y-6 pb-10 tablet:space-y-[56px] tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <div className="flex items-center gap-2 text-14xxl text-neutralDark tablet:text-16xxl laptop:text-20xxl">
        <HiOutlineMail className="text-main" />
        <p>Messages</p>
      </div>
      <section className="space-y-[22px] rounded bg-neutralLight p-3 tablet:rounded-[8px] tablet:p-5">
        <div className="flex items-center gap-2.5">
          <Link href="/user/messages">
            <BsArrowLeftShort className="text-[24px] text-second" />
          </Link>
          <SenderUi data={message} />
        </div>
        <p className="text-12xxl text-neutralDarkHover">{message.content}</p>
      </section>
    </main>
  );
}
