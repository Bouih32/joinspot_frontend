import Container from "@/components/Container";
import Header from "@/components/header/Header";
import UpgradeWrapper from "@/components/upgrade/UpgradeWrapper";

export default function UpgradePage() {
  return (
    <main className="flex flex-col">
      <Header />
      <section className="flex flex-col items-center tablet:flex-row">
        <section className="h-[390px] w-full bg-upgradeMobileBg bg-cover bg-bottom bg-no-repeat tablet:h-[calc(100vh-64px)] tablet:w-[80%] tablet:bg-upgradeBg tablet:bg-right"></section>
        <Container classname="h-full flex flexCenter">
          <UpgradeWrapper />
        </Container>
      </section>
    </main>
  );
}
