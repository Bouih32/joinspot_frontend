import { BsPostcardFill } from "react-icons/bs";
import { PiUsersFill } from "react-icons/pi";

export default function JoinedPage() {
  return (
    <main className="w-full space-y-6 pt-4 tablet:space-y-[56px] tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <div className="flex items-center gap-2 text-14xxl text-neutralDarkHover tablet:text-16xxl laptop:text-20xxl">
        <PiUsersFill className="text-main" />
        <p>Users that joined your activities</p>
      </div>
    </main>
  );
}
