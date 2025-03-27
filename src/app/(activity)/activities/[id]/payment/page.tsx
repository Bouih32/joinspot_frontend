import JoinForm from "@/components/activities/join/JoinForm";
import JoinSteps from "@/components/activities/join/JoinSteps";
import Summary from "@/components/activities/join/Summary";

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
      <Container classname="laptop:my-[70px] tablet:my-[50px] my-5">
        <JoinForm />
      </Container>
    </main>
  );
}
