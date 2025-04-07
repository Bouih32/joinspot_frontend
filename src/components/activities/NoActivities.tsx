import Image from "next/image";
import empty from "../../../public/images/empty.png";
import { JwtPayload } from "jsonwebtoken";
import Button from "../Button";
import Link from "next/link";

export default function NoActivities({
  token,
  params,
}: {
  token: string | JwtPayload | null;
  params: {
    seats: string;
    category: string;
    date: string;
    my: string;
    search: string;
  };
}) {
  let role: string | undefined;

  if (typeof token !== "string" && token !== null) {
    role = (token as JwtPayload).role;
  }

  return (
    <section className="space-y-5 self-center justify-self-center text-center tablet:mt-10">
      <Image
        src={empty}
        alt="empty"
        height={327}
        width={517}
        className="h-[207px] w-[327px] object-contain tablet:h-[327px] tablet:w-[517px]"
      />
      {!token && params.my === "own" && (
        <div className="">
          <h1 className="text-16xxl text-main">Looks Like You're Logged Out</h1>
          <p className="text-14xxl text-secondActive">
            Log in to your account to see your activities
          </p>
        </div>
      )}

      {token && role === "VISITOR" && params.my === "own" && (
        <div className="flexCenter flex-col">
          <h1 className="text-16xxl text-main">
            You Are Logged In As A Visitor
          </h1>
          <p className="mb-4 text-14xxl text-secondActive">
            Please upgrade to an organiser account to be able to create
            activities.
          </p>
          <Link href="/upgrade" className="mx-auto">
            <Button>Upgrade</Button>
          </Link>
        </div>
      )}

      {params.my !== "own" && (
        <div className="">
          <h1 className="text-16xxl text-main">No Activities Found!</h1>
          <p className="text-14xxl text-secondActive">
            OOps, looks like no results were found, Please try again later .
          </p>
        </div>
      )}
    </section>
  );
}
