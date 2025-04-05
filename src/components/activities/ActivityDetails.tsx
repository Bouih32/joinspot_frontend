import Stars from "./Stars";

type ActivityDetailsProps = {
  title: string;
  stars: number;
  full?: boolean;
};

export default function ActivityDetails({
  title,
  stars,
}: ActivityDetailsProps) {
  return (
    <section className="space-y-1 laptop:space-y-[14px]">
      <p className="line-clamp-2 select-none overflow-hidden text-14xxl text-darker tablet:w-full">
        {title}
      </p>
      <Stars stars={stars} />
    </section>
  );
}
