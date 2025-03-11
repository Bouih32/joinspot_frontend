import SideFilter from "@/components/activities/SideFilter";
import UpperHeader from "@/components/activities/UpperHeader";
import Container from "@/components/Container";

export default function ActivitiesPage() {
  return (
    <main className="space-y-5 tablet:space-y-[32px]">
      <UpperHeader />
      <Container>
        <section>
          <SideFilter />
          <main></main>
        </section>
      </Container>
    </main>
  );
}
