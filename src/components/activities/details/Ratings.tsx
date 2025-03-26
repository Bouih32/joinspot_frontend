import { nanoid } from "nanoid";
import Stars from "../Stars";
import ReviewButton from "./ReviewButton";
import { JwtPayload } from "jsonwebtoken";

type RatingsProps = {
  score: number;
  token: string | JwtPayload | null;
  id: string;
  reviews: { userName: string; comment: string }[];
};

export default function Ratings({ score, token, id, reviews }: RatingsProps) {
  return (
    <section className="space-y-4 rounded-xl bg-secondLight p-4 tablet:p-[18px]">
      <div className="flexBetween">
        <h3 className="text-16xxl text-main laptop:text-26xxl">
          Reviews & Ratings
        </h3>
        <Stars stars={score} />
      </div>
      {reviews.length > 0 ? (
        reviews.map((ele) => (
          <div
            key={nanoid()}
            className="border-l-[4px] border-main pl-2.5 text-12sm text-darker tablet:pl-4 tablet:text-14sm laptop:text-16sm"
          >
            <p>"{ele.comment}"</p>
            <span className="text-neutralDark">– {ele.userName}.</span>
          </div>
        ))
      ) : (
        <div
          key={nanoid()}
          className="border-l-[4px] border-main pl-2.5 text-12sm text-darker tablet:pl-4 tablet:text-14sm laptop:text-16sm"
        >
          <p>"Your voice matters! Be the first to leave a review."</p>
          <span className="text-neutralDark">– Joinspot Team.</span>
        </div>
      )}

      <div className="flex tablet:justify-end">
        <ReviewButton token={token} id={id} />
      </div>
    </section>
  );
}
