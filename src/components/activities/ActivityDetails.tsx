import Stars from "./Stars";

type ActivityDetailsProps = {
  description: string;
  stars: number;
};

export default function ActivityDetails({
  description,
  stars,
}: ActivityDetailsProps) {
  return (
    <section className="space-y-1">
      <p className="select-none text-14xxl text-darker tablet:w-[288px]">
        {description}
      </p>
      <Stars stars={stars} />
    </section>
  );
}
