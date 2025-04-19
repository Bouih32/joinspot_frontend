import { getLandingActivities } from "@/actions/activityActions";
import { getToken } from "@/actions/decodeToken";
import Community from "@/components/sections/community/Community";
import Hero from "@/components/sections/hero/Hero";
import HeroWrapper from "@/components/sections/hero/HeroWrapper";
import Offers from "@/components/sections/offers/Offers";
import OfferSkeleton from "@/components/sections/offers/OfferSkeleton";
import OfferWrapper from "@/components/sections/offers/OfferWrapper";
import Services from "@/components/sections/services/Services";
import HeroSkeleton from "@/components/skeletons/HeroSkeleton";
import { JwtPayload } from "jsonwebtoken";
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
  // const data = await getLandingActivities(params);
  // const token = await getToken();
  // let userId: string | undefined;

  // if (typeof token !== "string" && token !== null) {
  //   userId = (token as JwtPayload).userId;
  // }

  // const info = data.filter((ele) => ele.deletedAt === null);
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
