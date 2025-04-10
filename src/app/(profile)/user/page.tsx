import { getToken } from "@/actions/decodeToken";
import { getUserActivities } from "@/actions/getActivities";
import { TagsT } from "@/actions/getCategory";
import { getHeaderData } from "@/actions/getUserData";
import { getUserTags } from "@/actions/userActions";
import ActivityCard from "@/components/activities/ActivityCard";
import Button from "@/components/Button";
import Chip from "@/components/Chip";
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
  let userId: string | undefined;
  let role;
  if (typeof token !== "string" && token !== null) {
    userId = (token as JwtPayload).userId;
    role = (token as JwtPayload).role;
  }

  const userData = await getHeaderData();
  const userActivities = await getUserActivities(userId as string);
  const userTags = (await getUserTags()) as TagsT[];

  return (
    <main className="flex-1 space-y-4 pt-8 tablet:space-y-[30px] tablet:pl-[6px] tablet:pt-5 laptop:pl-5">
      <SocialsHeader
        location={userData.city.cityName}
        socials={userData.userSocials}
      />
      <section className="">
        <div className="flex items-center gap-2.5">
          <h2 className="text-14lg text-darker tablet:text-16lg laptop:text-20lg">
            Description
          </h2>
          <Link href="user/settings">
            <AiFillEdit className="text-main" />
          </Link>
        </div>

        <p className="text-12sm text-neutral tablet:text-14sm laptop:text-16sm">
          {userData.bio ?? "No description yet"}
        </p>
      </section>

      <section className="border-b border-neutralLightActive pb-6 tablet:border-b-0">
        <h2 className="text-14lg text-darker tablet:text-16lg laptop:text-20lg">
          Your tags
        </h2>

        <p className="text-12sm text-neutral tablet:text-14sm laptop:text-16sm">
          Select three tags to represent your interests and hobbies.
        </p>
        <div className="mt-2 flex items-center gap-1">
          <AddTags userTags={userTags} />
          {userTags.map((ele) => (
            <Chip key={nanoid()}>{ele.tagName}</Chip>
          ))}
        </div>
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
                <ActivityCard key={nanoid()} full data={ele} userId={userId} />
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
