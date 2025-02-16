import { getToken } from "@/actions/decodeToken";
import Header from "@/components/header/Header";
import Footer from "@/components/sections/Footer";

import { ReactNode } from "react";

export default async function MainPageLayoute({
  children,
}: {
  children: ReactNode;
}) {
  const payload = await getToken();
  console.log(payload);
  return (
    <main>
      <Header user={!!payload} />
      {children}
      <Footer />
    </main>
  );
}
