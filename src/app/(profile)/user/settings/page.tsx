import { getToken } from "@/actions/decodeToken";
import { getHeaderData } from "@/actions/getUserData";
import { getUserBank } from "@/actions/userActions";
import BankForm from "@/components/profileUi/settingsForms/BankForm";
import InfoForm from "@/components/profileUi/settingsForms/InfoForm";
import PhoneForm from "@/components/profileUi/settingsForms/PhoneForm";
import SocialsForm from "@/components/profileUi/settingsForms/SocialsForm";
import UpdateForm from "@/components/profileUi/settingsForms/UpdateForm";
import { JwtPayload } from "jsonwebtoken";
import { IoSettings } from "react-icons/io5";

export default async function SettingsPage() {
  const [userData, userBank, token] = await Promise.all([
    getHeaderData(),
    getUserBank(),
    getToken(),
  ]);

  let role: string | undefined;
  let userId: string | undefined;

  if (typeof token !== "string" && token !== null) {
    role = (token as JwtPayload).role;
    userId = (token as JwtPayload).userId;
  }
  return (
    <main className="w-full space-y-6 pt-5 tablet:space-y-[56px] tablet:pl-5 laptop:pl-8 laptop:pt-8">
      <div className="flex items-center gap-2 text-14xxl text-neutralDark tablet:text-16xxl laptop:text-20xxl">
        <IoSettings className="text-main" />
        <p>Settings</p>
      </div>
      <InfoForm
        userName={userData.userName}
        email={userData.email}
        bio={userData.bio}
      />

      <UpdateForm />
      {role === "ORGANISER" && <BankForm userBank={userBank} />}

      <SocialsForm socials={userData.userSocials} />
      <PhoneForm phone={userData.phone} />
    </main>
  );
}
