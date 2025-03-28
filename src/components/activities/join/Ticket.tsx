import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Ticket() {
  return (
    <Container>
      <main className="mx-auto flex w-full flex-col gap-8 tablet:gap-6 laptop:w-[1064px]">
        <section className="flex flex-col">
          <h1 className="text-main tablet:text-20xl">Download Your Ticket</h1>
          <p className="mb-1 text-14xxl text-second tablet:text-16xxl">
            Your booking is confirmed!
          </p>
          <p className="text-14lg text-neutralHover tablet:text-16lg">
            You can now download your ticket directly from this page. Click the 
            <span className="text-main">"Download Ticket"</span> button to save
            your e-ticket. You can also access it anytime from your account's{" "}
            <span className="text-main">"My tickets"</span> section.
          </p>
          <span className="tabley:mt-1 mt-2.5 cursor-pointer self-end text-14lg text-main underline tablet:text-16lg">
            Download Ticket
          </span>
        </section>
        <section className="rounded-xl border-neutralLightActive tablet:border tablet:p-5">
          <div className="bg-ticketPattern flex w-full flex-col justify-between gap-10 rounded-xl bg-[#1f1c2c] bg-cover bg-center p-4 text-14lg text-white tablet:flex-row tablet:p-5">
            <section className="space-y-8 tablet:space-y-20">
              <div className="">
                <h3 className="mb-4 text-20xl text-main">Activity Title</h3>
                <ul className="space-y-2.5">
                  <li>January 30 · 1:30pm</li>
                  <li>Organised by User Name </li>
                </ul>
              </div>
              <div className="flexBetween w-full rounded-[8px] border border-x-mainLightActive p-2.5 tablet:w-[285px]">
                <div className="">
                  <h4 className="text-main">Total</h4>
                  <p>360MAD</p>
                </div>
                <div className="">
                  <h4 className="text-main">Code</h4>
                  <p>WR5hy65Gg162</p>
                </div>
              </div>
            </section>
            <section className="">
              <h3 className="mb-4 text-main">Your informations</h3>
              <ul className="space-y-2.5">
                <li>Use name </li>
                <li>Username@gmail.com</li>
                <li>3 x General Admission </li>
              </ul>
            </section>

            <section className="space-y-2.5">
              <h3 className="mb-4 text-main">Activity informations</h3>
              <ul className="space-y-1">
                <li className="text-mainLightActive">Activity location : </li>
                <li>Agadir, marina in front of Jour et Nuit cafe.</li>
              </ul>
              <ul className="space-y-1">
                <li className="text-mainLightActive">Event Category : </li>
                <li>Cuisine</li>
              </ul>
              <ul className="space-y-1">
                <li className="text-mainLightActive">Number of seats :</li>
                <li>30 places</li>
              </ul>
            </section>
          </div>
        </section>
        <Link href="/activities" className="self-end">
          <Button className="bg-second">Done</Button>
        </Link>
      </main>
    </Container>
  );
}
