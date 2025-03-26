import { getCategories } from "@/actions/getCategory";
import { getCities } from "@/actions/getCities";
import SignupContext from "@/contexts/SignupContext";

import { unstable_cache } from "next/cache";
import { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const getCachedCategories = unstable_cache(getCategories, ["category-data"], {
    tags: ["category-data"],
    revalidate: false,
  });

  const getCachedCities = unstable_cache(getCities, ["cities-data"], {
    tags: ["cities-data"],
    revalidate: false,
  });

  const cetegoriesData = await getCachedCategories();
  const citiesData = await getCachedCities();

  return (
    <SignupContext
      categories={cetegoriesData.categories}
      cities={citiesData.cities}
    >
      {children}
    </SignupContext>
  );
}
