import { getToken } from "@/actions/decodeToken";
import Container from "@/components/Container";
import Header from "@/components/header/Header";
import ProfileHeader from "@/components/profileUi/ProfileHeader";
import SideNav from "@/components/profileUi/SideNav";
import { JwtPayload } from "jsonwebtoken";
import { ReactNode } from "react";

export default async function ProfileLayout({
  children,
}: {
  children: ReactNode;
}) {
  const token = await getToken();
  let role;

  if (typeof token !== "string" && token !== null) {
    role = (token as JwtPayload).role;
  }

  return (
    <main>
      <Header />
      <ProfileHeader />
      <Container>
        <section className="flex h-screen flex-col tablet:flex-row">
          <SideNav role={role} />
          {children}
        </section>
      </Container>
    </main>
  );
}
