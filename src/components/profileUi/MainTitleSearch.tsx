import { IoWallet } from "react-icons/io5";
import MobileSearch from "../adminUi/MobileSearch";
import Search from "../activities/Search";
import { ReactNode } from "react";

export default function MainTitleSearch({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col-reverse justify-between gap-4 tablet:h-[30px] tablet:flex-row tablet:items-center">
      <div className="flex items-center gap-2 text-14xxl text-neutralDark tablet:text-16xxl laptop:text-20xxl">
        <IoWallet className="text-main" />
        <p>{children}</p>
      </div>
      <MobileSearch />
      <Search />
    </section>
  );
}
