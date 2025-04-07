import Container from "../Container";
import { RiVipCrown2Fill } from "react-icons/ri";
import { ProfileT } from "@/libs/types";
import ProfilePic from "../profileUi/ProfilePic";
import StatsHolder from "../profileUi/StatsHolder";
import UserCTA from "./UserCTA";
import { getToken } from "@/actions/decodeToken";

export default async function UserCover({ userData }: { userData: ProfileT }) {
  const token = await getToken();
  return (
    <section
      style={{
        backgroundImage: `url(${userData.user.background.link && userData.user.background.link})`,
      }}
      className="flex h-[209px] items-end bg-red-300 bg-cover bg-right bg-no-repeat pb-8 tablet:h-[287px] tablet:bg-left"
    >
      <Container classname="flex flex-col items-center gap-[15px] tablet:flex-row justify-between">
        <section className="flex items-center gap-6 tablet:gap-5">
          <ProfilePic avatar={userData.user.avatar} />
          <div className="text-white">
            <div className="flex items-start gap-2.5 tablet:items-center">
              <h1 className="text-16xl tablet:text-28xl laptop:text-40xl">
                {userData.user.userName}
              </h1>
              {userData.user.role === "ORGANISER" && (
                <RiVipCrown2Fill className="text-second tablet:text-[24px]" />
              )}
            </div>

            <StatsHolder
              activityNumber={userData.activityNumber}
              followersNum={userData.followersNum}
              followingNum={userData.followingNum}
            />
          </div>
        </section>

        {token && <UserCTA />}
      </Container>
    </section>
  );
}
