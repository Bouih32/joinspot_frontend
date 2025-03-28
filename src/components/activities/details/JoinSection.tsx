import { ActivityDetailsT } from "@/libs/types";
import Link from "next/link";

export default function JoinSection({
  activity,
}: {
  activity: ActivityDetailsT;
}) {
  return activity.seat !== activity.joined ? (
    <section className="flexCenter flex-col gap-4 rounded-xl bg-main p-4 text-center text-white tablet:gap-5 tablet:py-[18px]">
      <h3 className="text-16xl tablet:text-20xl">Join Now!</h3>
      <p className="text-14sm">
        Spots are limited! Reserve your place now and experience the most
        peaceful sunset in Agadir.
      </p>
      <Link
        href="#"
        className="rounded bg-white px-3 py-1 text-14xl text-main tablet:text-16xl"
      >
        Reserve A Spot
      </Link>
    </section>
  ) : null;
}
