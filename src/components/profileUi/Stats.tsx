export default function Stats({
  stat,
  title,
}: {
  stat: number;
  title: string;
}) {
  return (
    <div className="">
      <span className="text-[18px] font-bold text-main tablet:text-22xl laptop:text-28xl">
        {stat < 10 ? "0" + stat : stat}
      </span>
      <p className="text-10sm tablet:text-12sm laptop:text-16sm">{title}</p>
    </div>
  );
}
