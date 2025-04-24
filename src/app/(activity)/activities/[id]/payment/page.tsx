import { getActivityById } from "@/actions/getActivities";
import { getHeaderData } from "@/actions/getUserData";
import JoinSteps from "@/components/activities/join/JoinSteps";
import JoinWrapper from "@/components/activities/join/JoinWrapper";
import Container from "@/components/Container";
import JoinContext from "@/contexts/JoinContext";

export default async function PaymentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [activity, user] = await Promise.all([
    getActivityById(id),
    getHeaderData(),
  ]);

  return (
    <main>
      <JoinContext activity={activity} user={user}>
        <JoinSteps />
        <Container classname="laptop:my-[70px] tablet:my-[50px] my-5">
          <JoinWrapper />
        </Container>
      </JoinContext>
    </main>
  );
}
