import { cn } from "@/libs/utils";
import { FaUserCircle } from "react-icons/fa";

export default function SideNav() {
  return (
    <aside className="flex-between flex h-fit w-full border-b border-neutralLightActive pt-3 tablet:w-[213px] tablet:flex-col tablet:gap-2.5 tablet:border-b-0 tablet:border-r tablet:pr-2.5 tablet:pt-5 laptop:w-[306px]">
      <div
        className={cn(
          "flex w-fit cursor-pointer items-center gap-2 border-b-[2px] border-main px-5 py-[17px] text-16xxl text-neutralDarkHover transition-all duration-75 hover:bg-main hover:text-white tablet:w-full tablet:rounded-[8px] tablet:border-b-0",
        )}
      >
        <div className="text-[24px]">
          <FaUserCircle />
        </div>
        <p className="hidden first-letter:uppercase tablet:block">test</p>
      </div>
      <div
        className={cn(
          "flex w-fit cursor-pointer items-center gap-2 border-b-[2px] border-main px-5 py-[17px] text-16xxl text-neutralDarkHover transition-all duration-75 hover:bg-main hover:text-white tablet:w-full tablet:rounded-[8px] tablet:border-b-0",
        )}
      >
        <div className="text-[24px]">
          <FaUserCircle />
        </div>
        <p className="hidden first-letter:uppercase tablet:block">test</p>
      </div>
      <div
        className={cn(
          "flex w-fit cursor-pointer items-center gap-2 border-b-[2px] border-main px-5 py-[17px] text-16xxl text-neutralDarkHover transition-all duration-75 hover:bg-main hover:text-white tablet:w-full tablet:rounded-[8px] tablet:border-b-0",
        )}
      >
        <div className="text-[24px]">
          <FaUserCircle />
        </div>
        <p className="hidden first-letter:uppercase tablet:block">test</p>
      </div>
      <div
        className={cn(
          "flex w-fit cursor-pointer items-center gap-2 border-b-[2px] border-main px-5 py-[17px] text-16xxl text-neutralDarkHover transition-all duration-75 hover:bg-main hover:text-white tablet:w-full tablet:rounded-[8px] tablet:border-b-0",
        )}
      >
        <div className="text-[24px]">
          <FaUserCircle />
        </div>
        <p className="hidden first-letter:uppercase tablet:block">test</p>
      </div>
      <div
        className={cn(
          "flex w-fit cursor-pointer items-center gap-2 border-b-[2px] border-main px-5 py-[17px] text-16xxl text-neutralDarkHover transition-all duration-75 hover:bg-main hover:text-white tablet:w-full tablet:rounded-[8px] tablet:border-b-0",
        )}
      >
        <div className="text-[24px]">
          <FaUserCircle />
        </div>
        <p className="hidden first-letter:uppercase tablet:block">test</p>
      </div>
    </aside>
  );
}
