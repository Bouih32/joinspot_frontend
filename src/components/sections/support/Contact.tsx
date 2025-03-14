import React from "react";
import ContactForm from "./ContactForm";
import Socials from "./Socials";

export default function Contact() {
  return (
    <section className="mt-[45px] flex flex-col rounded-[10px] bg-secondLight p-[5px] pb-10 text-white tablet:mt-[65px] tablet:flex-row tablet:p-2.5">
      <Socials />
      <ContactForm />
    </section>
  );
}
