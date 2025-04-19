import Community from "@/components/sections/community/Community";
import HeroWrapper from "@/components/sections/hero/HeroWrapper";
import OfferSkeleton from "@/components/sections/offers/OfferSkeleton";
import OfferWrapper from "@/components/sections/offers/OfferWrapper";
import Services from "@/components/sections/services/Services";
import HeroSkeleton from "@/components/skeletons/HeroSkeleton";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    city: string;
    category: string;
  }>;
}) {
  const params = await searchParams;

  return (
    <main className="font-openSans">
      <Suspense fallback={<HeroSkeleton />}>
        <HeroWrapper params={params} />
      </Suspense>
      <Services />
      <Suspense fallback={<OfferSkeleton />}>
        <OfferWrapper />
      </Suspense>

      <Community />
    </main>
  );
}
