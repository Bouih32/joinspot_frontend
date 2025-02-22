import { getCategories } from "@/actions/getCategory";
import SignupContext from "@/contexts/SignupContext";
import { unstable_cache } from "next/cache";
import { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const categories = unstable_cache(
    async () => {
      const data = await getCategories();

      return data;
    },
    ["category-data"],
    { tags: ["category-data"], revalidate: false },
  );

  const info = await categories();

  return <SignupContext>{children}</SignupContext>;
}
