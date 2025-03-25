import Button from "@/components/Button";
import Stars from "../Stars";

export default function Ratings() {
  return (
    <section className="space-y-4 rounded-xl bg-secondLight p-4 tablet:p-[18px]">
      <div className="flexBetween">
        <h1 className="text-16xxl text-main laptop:text-26xxl">
          Reviews & Ratings
        </h1>
        <Stars stars={4} />
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
        <Button secondary>Share Your Experience</Button>
      </div>
    </section>
  );
}
