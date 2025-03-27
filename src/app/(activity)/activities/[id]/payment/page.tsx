import JoinSteps from "@/components/activities/join/JoinSteps";
import TicketsNumber from "@/components/activities/join/TicketsNumber";
import Container from "@/components/Container";
import Image from "next/image";
import placeholder from "../../../../../../public/images/activityImg.jpg";

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
        <section className="flexBetween mx-auto w-full rounded-xl border-neutralLightActive tablet:border tablet:p-5 laptop:w-[1064px]">
          <section className="talet:w-[354px] w-full space-y-4 laptop:w-[416px]">
            <TicketsNumber />
            <div className="space-y-6 rounded-xl bg-secondLight p-3 tablet:p-5">
              <Image
                src={placeholder}
                alt="activity cover"
                height={328}
                width={376}
                className="h-[303px] w-full rounded-xl tablet:h-[251px] laptop:h-[328px]"
              />
              <div className="border-b-[2px] border-secondLightActive pb-2 text-14sm text-neutral tablet:text-16sm">
                <h3 className="text-20lg text-main">Order Summary</h3>
                <p className="">Junuary 28 at 12:30 Am</p>
                <div className="flexBetween font-medium">
                  <p>3 x General Admission</p>
                  <span>120 MAD</span>
                </div>
              </div>
              <div className="flexBetween text-14lg font-medium text-neutral tablet:text-16lg">
                <p>Total</p>
                <span className="text-main">360 MAD</span>
              </div>
            </div>
          </section>
          <section className="w-full tablet:w-[409px]"></section>
        </section>
      </Container>
    </main>
  );
}
