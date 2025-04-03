import Image from "next/image";
import Container from "../Container";

import OrganiserNav from "./OrganiserNav";
import { getToken } from "@/actions/decodeToken";
import { JwtPayload } from "jsonwebtoken";
import UpdateLink from "./UpdateLink";
import { RiVipCrown2Fill } from "react-icons/ri";
import { getProfileData } from "@/actions/getUserData";
import { UserProfileT } from "@/libs/types";
import StatsHolder from "./StatsHolder";
import ProfilePic from "./ProfilePic";

export default async function ProfileHeader() {
  const token = await getToken();
  let role: string | undefined;

  if (typeof token !== "string" && token !== null) {
    role = (token as JwtPayload).role;
  }

  const userData = (await getProfileData()) as UserProfileT;

  return (
    <section className="flex h-[209px] items-end bg-red-300 bg-profileCover bg-cover bg-right bg-no-repeat pb-8 tablet:h-[287px] tablet:bg-center">
      <Container classname="flex flex-col items-center gap-[15px] tablet:flex-row justify-between">
        <section className="flex items-center gap-6 tablet:gap-5">
          <ProfilePic avatar={userData.avatar} />
          <div className="text-white">
            <div className="flexCenter gap-2.5">
              <h1 className="text-16xl tablet:text-28xl laptop:text-40xl">
                {userData.userName}
              </h1>
              {role === "ORGANISER" && (
                <RiVipCrown2Fill className="text-second tablet:text-[24px]" />
              )}
            </div>

            <StatsHolder userData={userData} />
          </div>
        </section>

        {role === "VISITOR" ? <UpdateLink /> : <OrganiserNav data={userData} />}
      </Container>
    </section>
  );
}
