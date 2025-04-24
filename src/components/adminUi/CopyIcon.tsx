"use client";

import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { FaFileCircleCheck } from "react-icons/fa6";

export default function CopyIcon({ rib }: { rib: string }) {
  const [done, setDone] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(rib);
    setDone(true);
    setTimeout(() => setDone(false), 1500);
  };
  return done ? (
    <FaFileCircleCheck />
  ) : (
    <FaCopy className="cursor-pointer hover:text-main" onClick={handleCopy} />
  );
}
