import { getActivityById } from "@/actions/getActivities";
import { getHeaderData } from "@/actions/getUserData";
import JoinForm from "@/components/activities/join/JoinForm";
import JoinSteps from "@/components/activities/join/JoinSteps";
import Container from "@/components/Container";
import JoinContext from "@/contexts/JoinContext";

export default async function PaymentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const activity = await getActivityById(id);
  const user = await getHeaderData();
  return (
    <main>
      <JoinContext activity={activity} user={user}>
        <JoinSteps />
        <Container classname="laptop:my-[70px] tablet:my-[50px] my-5">
          <JoinForm />
        </Container>
      </JoinContext>
    </main>
  );
}
