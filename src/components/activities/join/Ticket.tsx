"use client";

import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { JoinContextP } from "@/contexts/JoinContext";
import { formatTicketDate, getContext } from "@/libs/utils";
import Link from "next/link";

export default function Ticket() {
  const { count, activity, code, user } = getContext(JoinContextP);
  const ticketRef = useRef<HTMLDivElement>(null);

  // Function to generate and download PDF
  const downloadTicketAsPDF = async () => {
    if (!ticketRef.current) return;

    const canvas = await html2canvas(ticketRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("ticket.pdf");
  };

  const ticketDate = formatTicketDate();

  return (
    <Container>
      <main className="mx-auto flex w-full flex-col gap-8 tablet:gap-6 laptop:w-[1064px]">
        <section className="flex flex-col">
          <h1 className="text-main tablet:text-20xl">Download Your Ticket</h1>
          <p className="mb-1 text-14xxl text-second tablet:text-16xxl">
            Your booking is confirmed!
          </p>
          <p className="text-14lg text-neutralHover tablet:text-16lg">
            You can now download your ticket directly from this page. Click the{" "}
            <span className="text-main">"Download Ticket"</span> button to save
            your e-ticket. You can also access it anytime from your account's{" "}
            <span className="text-main">"My tickets"</span> section.
          </p>
          <span
            onClick={downloadTicketAsPDF}
            className="tabley:mt-1 mt-2.5 cursor-pointer self-end text-14lg text-main underline tablet:text-16lg"
          >
            Download Ticket
          </span>
        </section>

        <section
          ref={ticketRef}
          className="rounded-xl border-neutralLightActive tablet:border tablet:p-5"
        >
          <div className="flex w-full flex-col justify-between gap-10 rounded-xl bg-[#1f1c2c] bg-ticketPattern bg-cover bg-center p-4 text-14lg text-white tablet:flex-row tablet:p-5">
            <section className="space-y-8 tablet:space-y-20">
              <div>
                <h3 className="mb-4 text-20xl text-main">{activity.title}</h3>
                <ul className="space-y-2.5">
                  <li>{ticketDate}</li>
                  <li>Organised by {activity.userName} </li>
                </ul>
              </div>
              <div className="flexBetween w-full rounded-[8px] border border-x-mainLightActive p-2.5 tablet:w-[285px]">
                <div>
                  <h4 className="text-main">Total</h4>
                  <p>{activity.price * count} MAD</p>
                </div>
                <div>
                  <h4 className="text-main">Code</h4>
                  <p>{code}</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="mb-4 text-main">Your informations</h3>
              <ul className="space-y-2.5">
                <li>{user.userName}</li>
                <li>{user.email}</li>
                <li>{count} x General Admission</li>
              </ul>
            </section>

            <section className="space-y-2.5">
              <h3 className="mb-4 text-main">Activity informations</h3>
              <ul className="space-y-1">
                <li className="text-mainLightActive">Activity location :</li>
                <li>
                  {activity.city}, {activity.location}.
                </li>
              </ul>
              <ul className="space-y-1">
                <li className="text-mainLightActive">Event Category :</li>
                <li>{activity.category}</li>
              </ul>
              <ul className="space-y-1">
                <li className="text-mainLightActive">Number of seats :</li>
                <li>{activity.seat} places</li>
              </ul>
            </section>
          </div>
        </section>

        <Link href="/activities" className="self-end">
          <Button className="bg-second hover:bg-main hover:text-white">
            Done
          </Button>
        </Link>
      </main>
    </Container>
  );
}
