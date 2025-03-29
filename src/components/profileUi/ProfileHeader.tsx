import Image from "next/image";
import Container from "../Container";
import placeholder from "../../../public/images/avatar_placeholder.jpg";
import Stats from "./Stats";
import OrganiserNav from "./OrganiserNav";
import { getToken } from "@/actions/decodeToken";
import { JwtPayload } from "jsonwebtoken";
import UpdateLink from "./UpdateLink";
import { RiVipCrown2Fill } from "react-icons/ri";
import { getProfileData } from "@/actions/getUserData";
import { UserProfileT } from "@/libs/types";
import StatsHolder from "./StatsHolder";

export default async function ProfileHeader() {
  const token = await getToken();
  let role: string | undefined;

  if (typeof token !== "string" && token !== null) {
    role = (token as JwtPayload).role;
  }

  const userData = (await getProfileData()) as UserProfileT;

  return (
    <section className="bg-profileCover flex h-[209px] items-end bg-red-300 bg-cover bg-right bg-no-repeat pb-8 tablet:h-[287px] tablet:bg-center">
      <Container classname="flex flex-col items-center gap-[15px] tablet:flex-row justify-between">
        <section className="flex items-center gap-6 tablet:gap-5">
          <div className="h-[70px] w-[70px] overflow-hidden rounded-[16px] border-[2px] border-x-secondLightActive tablet:h-[130px] tablet:w-[130px] tablet:rounded-[18px] tablet:border-[4px] laptop:h-[142px] laptop:w-[142px]">
            <Image
              src={userData.avatar ? userData.avatar : placeholder}
              alt="profile image "
              className="h-full w-full"
              height={70}
              width={70}
            />
          </div>
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

        {role === "VISITOR" ? <UpdateLink /> : <OrganiserNav />}
      </Container>
    </section>
  );
}
