"use client";

import { useState } from "react";
import Calender from "./Calender";
import DatePick from "./DatePick";
import { nanoid } from "nanoid";

export default function DateFilter() {
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = (dates: string[]) => {
    setSelectedDates(dates);
    setShow(false);
  };

  return (
    <>
      <div className="space-y-3">
        <p className="tablet:text-16sm">Select by date:</p>
        <div className="flexBetween flex-col gap-2 tablet:flex-row tablet:gap-4">
          <DatePick
            day={
              selectedDates.length > 0 ? selectedDates[0] : "Select Start Day"
            }
            handleOpen={handleOpen}
          />
          <DatePick
            day={selectedDates.length > 0 ? selectedDates[0] : "Select End Day"}
            handleOpen={handleOpen}
          />
        </div>
      </div>
      {show && <Calender handleClose={handleClose} />}
    </>
  );
}
