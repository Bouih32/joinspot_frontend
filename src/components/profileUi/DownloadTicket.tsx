"use client";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useRef, useState } from "react";
import { TicketT } from "@/libs/types";
import { IoMdDownload } from "react-icons/io";

const DownloadTicket = ({
  myTicket,
  user,
}: {
  myTicket: TicketT;
  user: any;
}) => {
  const [show, setShow] = useState(false);
  const ticketRef = useRef<HTMLDivElement | null>(null);

  const downloadTicketAsPDF = async () => {
    setShow(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (!ticketRef.current) return;

    // Wait for rendering

    const canvas = await html2canvas(ticketRef.current, { scale: 2 }); // Hide it again

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("ticket.pdf");

    setShow(false);
  };

  return (
    <div>
      <IoMdDownload
        className="cursor-pointer hover:text-main"
        onClick={downloadTicketAsPDF}
      />

      {show && (
        <div className="absolute inset-0 h-full w-full bg-white/50">
          <section
            ref={ticketRef}
            className="rounded-xl border-neutralLightActive tablet:border tablet:p-5"
          >
            <div className="flex w-full flex-col justify-between gap-10 rounded-xl bg-[#1f1c2c] bg-ticketPattern bg-cover bg-center p-4 text-14lg text-white tablet:flex-row tablet:p-5">
              <section className="space-y-8 tablet:space-y-20">
                <div>
                  <h3 className="mb-4 text-20xl text-main">{myTicket.title}</h3>
                  <ul className="space-y-2.5">
                    <li>{myTicket.ticketDate}</li>
                    <li>Organised by {myTicket.organizer} </li>
                  </ul>
                </div>
                <div className="flexBetween w-full rounded-[8px] border border-x-mainLightActive p-2.5 tablet:w-[285px]">
                  <div>
                    <h4 className="text-main">Total</h4>
                    <p>{myTicket.totalPaid} MAD</p>
                  </div>
                  <div>
                    <h4 className="text-main">Code</h4>
                    <p>{myTicket.code}</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 text-main">Your informations</h3>
                <ul className="space-y-2.5">
                  <li>{user.userName}</li>
                  <li>{user.email}</li>
                  <li>{myTicket.quantity} x General Admission</li>
                </ul>
              </section>

              <section className="space-y-2.5">
                <h3 className="mb-4 text-main">Activity informations</h3>
                <ul className="space-y-1">
                  <li className="text-mainLightActive">Activity location :</li>
                  <li>
                    {myTicket.city}, {myTicket.location}.
                  </li>
                </ul>
                <ul className="space-y-1">
                  <li className="text-mainLightActive">Event Category :</li>
                  <li>{myTicket.category}</li>
                </ul>
                <ul className="space-y-1">
                  <li className="text-mainLightActive">Number of seats :</li>
                  <li>{myTicket.seats} places</li>
                </ul>
              </section>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default DownloadTicket;
