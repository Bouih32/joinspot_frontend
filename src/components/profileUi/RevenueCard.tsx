export default function RevenueCard({
  data,
}: {
  data: {
    title: string | undefined;
    totalRevenue: number;
  };
}) {
  return (
    <div className="flexBetween bg-[#F8F8F8] px-3 py-4 text-12lg text-neutralDarkHover tablet:text-14lg laptop:text-16lg">
      <p className="line-clamp-1 max-w-[300px] overflow-hidden">{data.title}</p>
      <p className="text-neutral">{data.totalRevenue}$</p>
    </div>
  );
}
