import Container from "@/components/Container";

import Link from "next/link";

export default function Join() {
  return (
    <section className="bg-lines bg-main bg-cover bg-center py-[34px] text-secondLight">
      <Container classname="tablet:space-y-4 space-y-3 text-center">
        <h3 className="title">Join the Movement</h3>
        <p className="text-16xxl">
          Whether you're here to organize an activity, join an event, or simply
          share your experiences, we’re thrilled to have you as part of the
          JoinSpot community. Together, let’s create a world where every day is
          an adventure!
        </p>

        <Link href="signup">Get Started </Link>
      </Container>
    </section>
  );
}
