export default function Description({ description }: { description: string }) {
  return (
    <section className="space-y-3 rounded-xl bg-secondLight p-4 tablet:p-[18px]">
      <h3 className="text-14xl text-main laptop:text-20xl">Quick Overview</h3>
      <p className="text-[12px] leading-[21px] tablet:text-[14px] tablet:leading-[24px] laptop:text-[16px]">
        {description}
      </p>
    </section>
  );
}
