import Container from "@/components/Container";
import Header from "@/components/header/Header";
import ProfileHeader from "@/components/profileUi/ProfileHeader";
import SideNav from "@/components/profileUi/SideNav";
import { ReactNode } from "react";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Header />
      <ProfileHeader />
      <Container>
        <section className="flex h-screen flex-col tablet:flex-row">
          <SideNav />
          {children}
        </section>
      </Container>
    </main>
  );
}
