"use client";

import Container from "@/components/Container";
import { JoinContextP } from "@/contexts/JoinContext";
import { cn } from "@/lib/utils";
import { getContext } from "@/libs/utils";
import { useRouter } from "next/navigation";

export default function JoinSteps() {
  const { step } = getContext(JoinContextP);
  const router = useRouter();
  return (
    <section className="border-secondLightActive bg-secondLight py-2 text-12lg uppercase tablet:border-b tablet:py-[18px] tablet:text-16lg">
      <Container classname="flexBetween">
        <div className="space-x-6 tablet:space-x-10">
          <span
            className={cn("text-success underline", step === 1 && "text-main")}
          >
            Payement method
          </span>
          <span
            className={cn(
              "text-secondLightActive underline",
              step === 2 && "text-main",
            )}
          >
            Tikets
          </span>
        </div>
        {step === 1 ? (
          <span
            onClick={() => router.back()}
            className="cursor-pointer text-second underline"
          >
            Cancel
          </span>
        ) : null}
      </Container>
    </section>
  );
}
