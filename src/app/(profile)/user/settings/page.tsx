import { getHeaderData } from "@/actions/getUserData";
import Container from "@/components/Container";
import InfoForm from "@/components/profileUi/settingsForms/InfoForm";
import SocialsForm from "@/components/profileUi/settingsForms/SocialsForm";
import UpdateForm from "@/components/profileUi/settingsForms/UpdateForm";
import { IoSettings } from "react-icons/io5";

export default async function SettingsPage() {
  const userData = await getHeaderData();
  return (
    <main className="w-full space-y-6 tablet:space-y-[56px] tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
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
      <SocialsForm socials={userData.userSocials} />
    </main>
  );
}
