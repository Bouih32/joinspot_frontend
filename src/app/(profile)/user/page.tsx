import { getToken } from "@/actions/decodeToken";
import { getUserActivities } from "@/actions/getActivities";
import ActivityCard from "@/components/activities/ActivityCard";
import Button from "@/components/Button";
import AddTags from "@/components/profileUi/AddTags";
import NoActivity from "@/components/profileUi/NoActivity";
import SocialsHeader from "@/components/profileUi/SocialsHeader";
import VisitorCTA from "@/components/profileUi/VisitorCTA";
import { JwtPayload } from "jsonwebtoken";
import { nanoid } from "nanoid";
import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";
import { CgMathPlus } from "react-icons/cg";

export default async function UserPage() {
  const token = await getToken();
  let userId;
  let role;
  if (typeof token !== "string" && token !== null) {
    userId = (token as JwtPayload).userId;
    role = (token as JwtPayload).role;
  }
  const userActivities = await getUserActivities(userId);

  return (
    <main className="flex-1 space-y-4 pt-8 tablet:space-y-[30px] tablet:pl-[6px] tablet:pt-5 laptop:pl-5">
      <SocialsHeader />
      <section className="">
        <div className="flex items-center gap-2.5">
          <h2 className="text-14lg text-darker tablet:text-16lg laptop:text-20lg">
            Description
          </h2>
          <AiFillEdit className="text-main" />
        </div>

        <p className="text-12sm text-neutral tablet:text-14sm laptop:text-16sm">
          Lorem ipsum dolor sit amet consectetur. Cras odio leo a massa dui
          aliquam ultricies at porta. Suspendisse consequat justo lorem nec
          fermentum eget. Blandit sit feugiat mi proin. Fermentum id gravida
          amet elementum. Eu imperdiet pellentesque in elit sit duis ridiculus.
          A pellentesque sed venenatis suspendisse viverra facilisis tempor
          adipiscing. Urna mattis urna nisl velit. Sit ut blandit placerat nunc
          nunc gravida eu metus. Nec mattis tempus ipsum eleifend.
        </p>
      </section>

      <section className="border-b border-neutralLightActive pb-6 tablet:border-b-0">
        <h2 className="text-14lg text-darker tablet:text-16lg laptop:text-20lg">
          Your tags
        </h2>

        <p className="text-12sm text-neutral tablet:text-14sm laptop:text-16sm">
          Select three tags to represent your interests and hobbies.
        </p>
        <AddTags />
      </section>

      <section className="pb-10">
        <div className="flexBetween">
          <p className="text-14lg text-main tablet:text-16lg laptop:text-20lg">
            Your activities
          </p>
          <Link href="/activities/add">
            <Button icon={<CgMathPlus />}>Creat activity</Button>
          </Link>
        </div>

        {role === "VISITOR" ? (
          <VisitorCTA />
        ) : (
          <section className="mt-[30px] flex flex-col gap-6">
            {userActivities.length > 0 ? (
              userActivities.map((ele) => (
                <ActivityCard key={nanoid()} full data={ele} />
              ))
            ) : (
              <NoActivity />
            )}
          </section>
        )}
      </section>
    </main>
  );
}
