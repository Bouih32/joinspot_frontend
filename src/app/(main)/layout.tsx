import Header from "@/components/header/Header";
import Footer from "@/components/sections/Footer";

import React, { ReactNode } from "react";

export default async function MainPageLayoute({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
