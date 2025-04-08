import { getUpdateStatus } from "@/actions/userActions";
import Container from "@/components/Container";
import Header from "@/components/header/Header";
import PendingUi from "@/components/upgrade/PendingUi";
import UpgradeWrapper from "@/components/upgrade/UpgradeWrapper";

export default async function UpgradePage() {
  const status = await getUpdateStatus();
  console.log(status);
  return (
    <main className="flex flex-col">
      <Header />
      <section className="flex flex-col items-center tablet:flex-row">
        <section className="h-[390px] w-full bg-upgradeMobileBg bg-cover bg-bottom bg-no-repeat tablet:h-[calc(100vh-64px)] tablet:w-[80%] tablet:bg-upgradeBg tablet:bg-right"></section>
        <Container classname="h-full flex flexCenter">
          {!status ? <UpgradeWrapper /> : <PendingUi />}
        </Container>
      </section>
    </main>
  );
}
