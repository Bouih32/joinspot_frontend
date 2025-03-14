"use client";

import { useState } from "react";
import Calender from "./Calender";
import DatePick from "./DatePick";
import { nanoid } from "nanoid";

export default function DateFilter() {
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow((prev) => !prev);
  };

  const handleClose = (dates: string[]) => {
    setSelectedDates(dates);
    setShow(false);
  };

  return (
    <>
      <div className="space-y-3">
        <p className="text-darker tablet:text-16sm">Select by date:</p>

        <DatePick
          day={selectedDates.length > 0 ? selectedDates : null}
          handleOpen={handleOpen}
        />
      </div>
      {show && <Calender handleClose={handleClose} />}
    </>
  );
}
