import Container from "@/components/Container";
import Header from "@/components/header/Header";
import FirstForm from "@/components/upgrade/FirstForm";

export default async function UpgradePage() {
  return (
    <main className="flex flex-col">
      <Header />
      <section className="flex flex-col items-center tablet:flex-row">
        <section className="tablet:bg-upgradeBg bg-upgradeMobileBg h-[390px] w-full bg-cover bg-bottom bg-no-repeat tablet:h-[calc(100vh-64px)] tablet:bg-right"></section>
        <Container classname="h-full flex flexCenter">
          <div className="flex h-full flex-col gap-5 pt-10">
            <div className="">
              <h1 className="text-16xl text-darker tablet:text-20xl laptop:text-28xl">
                Verify your informations
              </h1>
              <p className="text-12sm text-main tablet:text-14sm">
                Complete the inputs field to verified your organiser account
              </p>
            </div>
            <FirstForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
