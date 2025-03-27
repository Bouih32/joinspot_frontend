import Container from "@/components/Container";

export default function JoinSteps() {
  return (
    <section className="border-secondLightActive bg-secondLight py-2 text-12lg uppercase tablet:border-b tablet:py-[18px] tablet:text-16lg">
      <Container classname="flexBetween">
        <div className="space-x-6 tablet:space-x-10">
          <span className="text-main underline">Payement method</span>
          <span className="text-secondLightActive underline">Tikets</span>
        </div>
        <span className="text-second underline">Cancel</span>
      </Container>
    </section>
  );
}
