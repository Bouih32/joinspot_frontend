import { getUserProfile } from "@/actions/userActions";
import Header from "@/components/header/Header";
import UserCover from "@/components/user/UserCover";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userData = await getUserProfile(id);

  return (
    <>
      <Header />
      <main>
        <UserCover userData={userData} />
      </main>
    </>
  );
}
