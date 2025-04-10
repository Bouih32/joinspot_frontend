import { getToken } from "@/actions/decodeToken";
import { getUserActivities } from "@/actions/getActivities";
import { getUserProfile } from "@/actions/userActions";
import ActivityCard from "@/components/activities/ActivityCard";
import Chip from "@/components/Chip";
import Container from "@/components/Container";
import Header from "@/components/header/Header";
import SocialsHeader from "@/components/profileUi/SocialsHeader";
import NoData from "@/components/user/NoData";
import UserCover from "@/components/user/UserCover";
import { ProfileT } from "@/libs/types";
import { JwtPayload } from "jsonwebtoken";
import { nanoid } from "nanoid";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userData = (await getUserProfile(id)) as ProfileT;
  const userActivities = await getUserActivities(id);
  const token = await getToken();
  let userId: string | undefined;

  if (typeof token !== "string" && token !== null) {
    userId = (token as JwtPayload).userId;
  }

  return (
    <>
      <Header />
      <main>
        <UserCover userData={userData} />
        <Container classname="mt-5">
          <SocialsHeader
            location={userData.user.city.cityName}
            socials={userData.user.socials}
            profile
          />
          <section className="mt-5 space-y-[14px]">
            <h3 className="text-14xxl text-main tablet:text-16xxl laptop:text-20xxl">
              About {userData.user.userName}
            </h3>
            <p className="text-12sm text-neutralDark tablet:text-14sm">
              {userData.user.bio ? userData.user.bio : "No bio available"}
            </p>
            <h4 className="text-14xl text-neutralDarkActive">
              {userData.user.userName} tags
            </h4>
            <div className="flex items-center gap-[6px]">
              {userData.tags.length !== 0 ? (
                userData.tags.map((ele) => (
                  <Chip key={nanoid()} secondary>
                    {ele}
                  </Chip>
                ))
              ) : (
                <p className="text-14sm text-neutralDark">No tags available</p>
              )}
            </div>
          </section>
          <section className="mt-8 space-y-6 tablet:mt-10 tablet:space-y-10">
            <h3 className="text-14xxl text-main tablet:text-16xxl laptop:text-20xxl">
              {userData.user.userName} activities
            </h3>
            <section className="flex flex-col gap-6 pb-10">
              {userActivities.length !== 0 ? (
                userActivities.map((ele) => (
                  <ActivityCard
                    key={nanoid()}
                    details
                    data={ele}
                    userId={userId}
                  />
                ))
              ) : (
                <NoData />
              )}
            </section>
          </section>
        </Container>
      </main>
    </>
  );
}
