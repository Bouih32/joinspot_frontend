import MessageCard from "@/components/profileUi/messages/MessageCard";
import { HiOutlineMail } from "react-icons/hi";

export default function MessagesPage() {
  return (
    <main className="w-full space-y-6 tablet:space-y-[56px] tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <div className="flex items-center gap-2 text-14xxl text-neutralDark tablet:text-16xxl laptop:text-20xxl">
        <HiOutlineMail className="text-main" />
        <p>Messages</p>
      </div>
      <section className="space-y-3 tablet:space-y-[19px]">
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </section>
    </main>
  );
}
