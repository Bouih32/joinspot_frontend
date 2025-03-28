"use client";

import { JoinContextP } from "@/contexts/JoinContext";
import { getContext } from "@/libs/utils";
import JoinForm from "./JoinForm";
import Ticket from "./Ticket";

export default function JoinWrapper() {
  const { step } = getContext(JoinContextP);
  return <>{step === 1 ? <JoinForm /> : <Ticket />}</>;
}
