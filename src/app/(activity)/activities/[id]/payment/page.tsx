import JoinSteps from "@/components/activities/join/JoinSteps";
import Container from "@/components/Container";

export default async function PaymentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main>
      <JoinSteps />
      <Container classname="laptop:mt-[70px] tablet:mt-[50px] mt-5">
        <section className="mx-auto w-full rounded-xl border-neutralLightActive tablet:border tablet:p-5 laptop:w-[1064px]">
          <section className="talet:w-[354px] w-full laptop:w-[416px]"></section>
        </section>
      </Container>
    </main>
  );
}
