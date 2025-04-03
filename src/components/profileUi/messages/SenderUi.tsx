export default function SenderUi() {
  return (
    <div className="flex items-center gap-[6px] tablet:gap-[15px]">
      <div className="h-[26px] w-[26px] rounded-full bg-red-300 tablet:h-[42px] tablet:w-[42px] laptop:h-[47px] laptop:w-[47px]"></div>
      <div className="">
        <h3 className="text-16xl text-main">Zaire Botosh</h3>
        <p className="text-[8px] font-semibold text-neutralActive">
          At 12:45 AM . 12 feb 2025
        </p>
      </div>
    </div>
  );
}
