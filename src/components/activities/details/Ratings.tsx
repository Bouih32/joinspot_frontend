import Button from "@/components/Button";
import Stars from "../Stars";
import ReviewButton from "./ReviewButton";

type RatingsProps = {
  score: number;
};

export default function Ratings({ score }: RatingsProps) {
  return (
    <section className="space-y-4 rounded-xl bg-secondLight p-4 tablet:p-[18px]">
      <div className="flexBetween">
        <h3 className="text-16xxl text-main laptop:text-26xxl">
          Reviews & Ratings
        </h3>
        <Stars stars={score} />
      </div>
      <div className="border-l-[4px] border-main pl-2.5 text-12sm text-darker tablet:pl-4 tablet:text-14sm laptop:text-16sm">
        <p>
          "Absolutely magical experience! Sophie is a fantastic instructor, and
          the sunset view was breathtaking."
        </p>
        <span className="text-neutralDark">– Emily R.</span>
      </div>
      <div className="border-l-[4px] border-main pl-2.5 text-12sm text-darker tablet:pl-4 tablet:text-14sm laptop:text-16sm">
        <p>
          "Absolutely magical experience! Sophie is a fantastic instructor, and
          the sunset view was breathtaking."
        </p>
        <span className="text-neutralDark">– Emily R.</span>
      </div>
      <div className="flex tablet:justify-end">
        <ReviewButton />
      </div>
    </section>
  );
}
