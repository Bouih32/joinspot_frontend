import MobileSearch from "../adminUi/MobileSearch";
import Search from "../activities/Search";
import { ReactNode } from "react";

export default function MainTitleSearch({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col-reverse justify-between gap-4 tablet:h-[30px] tablet:flex-row tablet:items-center">
      {children}
      <MobileSearch />
      <Search />
    </section>
  );
}
