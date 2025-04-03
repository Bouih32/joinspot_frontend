import { getUserMessages } from "@/actions/userActions";
import MessageCard from "@/components/profileUi/messages/MessageCard";
import { MessageT } from "@/libs/types";
import { nanoid } from "nanoid";
import { HiOutlineMail } from "react-icons/hi";

export default async function MessagesPage() {
  const messages = (await getUserMessages()) as MessageT[];
  return (
    <main className="w-full space-y-6 tablet:space-y-[56px] tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <div className="flex items-center gap-2 text-14xxl text-neutralDark tablet:text-16xxl laptop:text-20xxl">
        <HiOutlineMail className="text-main" />
        <p>Messages</p>
      </div>
      <section className="space-y-3 tablet:space-y-[19px]">
        {messages.map((ele) => (
          <MessageCard key={nanoid()} data={ele} />
        ))}
      </section>
    </main>
  );
}
