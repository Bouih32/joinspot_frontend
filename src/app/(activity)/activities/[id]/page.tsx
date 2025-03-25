import Container from "@/components/Container";
import React from "react";

export default async function ActivityDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main>
      <Container classname="tablet:border laptop:p-[25px] tablet:p-4 border-secondLightActive rounded-xl tablet:mt-10 mt-[25px]">
        hello
      </Container>
    </main>
  );
}
