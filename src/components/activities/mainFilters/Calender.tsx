import React, { useState, useEffect } from "react";
import { addParam, cn, formatTimestamp } from "@/libs/utils";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Button from "@/components/Button";
import { useRouter, useSearchParams } from "next/navigation";

interface CalendarDay {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
}

type CalenderProps = {
  handleClose: (dates: string[]) => void;
};

export default function Calender({ handleClose }: CalenderProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<number[]>([]);
  const [todayDate, setTodayDate] = useState<Date | null>(null);
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const today = new Date();
    setTodayDate(
      new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    );
  }, []);

  const handleApply = () => {
    const data = selectedDates.map((timestamp) => {
      const date = new Date(timestamp);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    });

    const unixTimestamps = selectedDates.map((timestamp) => {
      const date = new Date(timestamp);
      return date.getTime(); // Get Unix timestamp in milliseconds
    });

    addParam("date", unixTimestamps.join("_"), params, router);

    handleClose(data);
  };

  const getFirstDayOfMonth = (date: Date): number => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDay.getDay();
  };

  const getDaysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const generateCalendarDays = (date: Date): CalendarDay[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = getFirstDayOfMonth(date);
    const daysInMonth = getDaysInMonth(date);

    const prevMonthDays = getDaysInMonth(new Date(year, month - 1, 1));
    const firstDayOfWeek = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const calendarDays: CalendarDay[] = [];
    for (let i = 0; i < 42; i++) {
      if (i < firstDayOfWeek) {
        calendarDays.push({
          day: prevMonthDays - firstDayOfWeek + i + 1,
          month: month - 1,
          year: month === 0 ? year - 1 : year,
          isCurrentMonth: false,
        });
      } else if (i >= firstDayOfWeek && i < firstDayOfWeek + daysInMonth) {
        calendarDays.push({
          day: i - firstDayOfWeek + 1,
          month: month,
          year: year,
          isCurrentMonth: true,
        });
      } else {
        calendarDays.push({
          day: i - firstDayOfWeek - daysInMonth + 1,
          month: month + 1,
          year: month === 11 ? year + 1 : year,
          isCurrentMonth: false,
        });
      }
    }
    return calendarDays;
  };

  const isPastDate = (year: number, month: number, day: number): boolean => {
    const today = new Date();
    const dateToCheck = new Date(year, month, day);
    return (
      dateToCheck <
      new Date(today.getFullYear(), today.getMonth(), today.getDate())
    );
  };

  const handlePrevMonth = (): void => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1),
    );
  };

  const handleNextMonth = (): void => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1),
    );
  };

  const handleDateClick = (day: number, month: number, year: number): void => {
    const clickedDate = new Date(year, month, day).getTime();
    if (selectedDates.length === 2) {
      setSelectedDates([clickedDate]);
    } else if (selectedDates.includes(clickedDate)) {
      setSelectedDates(selectedDates.filter((date) => date !== clickedDate));
    } else {
      setSelectedDates([...selectedDates, clickedDate]);
    }
  };

  const calendarDays = generateCalendarDays(currentDate);

  return (
    <div className="flex w-full flex-col gap-4 self-center p-[5.5px] shadow-22xl tablet:w-[324px] tablet:p-4">
      <div className="flexBetween text-12xl text-neutral tablet:text-16xl">
        <MdKeyboardArrowLeft
          className="cursor-pointer text-[20px]"
          onClick={handlePrevMonth}
        />
        <span className="text-darker">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <MdKeyboardArrowRight
          className="cursor-pointer text-[20px]"
          onClick={handleNextMonth}
        />
      </div>
      <div className="">
        <div className="grid grid-cols-7 gap-[2px] text-10xl text-darker tablet:text-14xl">
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
            <span
              key={day}
              className="grid h-6 w-[30px] place-content-center rounded-[2px] tablet:h-[32px] tablet:w-10"
            >
              {day}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-[2px] text-10sm tablet:text-14sm">
          {calendarDays.map((dayData, index) => {
            const date = new Date(dayData.year, dayData.month, dayData.day);
            const dateTimestamp = date.getTime();
            const isSelected = selectedDates.includes(dateTimestamp);
            const isBetween =
              selectedDates.length === 2 &&
              dateTimestamp > Math.min(...selectedDates) &&
              dateTimestamp < Math.max(...selectedDates);
            const isToday = todayDate && date.getTime() === todayDate.getTime();

            return (
              <span
                key={index}
                className={cn(
                  "grid h-6 w-[30px] cursor-pointer place-content-center rounded-[2px] text-darker tablet:h-[32px] tablet:w-10",
                  !dayData.isCurrentMonth && "text-neutral",
                  isPastDate(dayData.year, dayData.month, dayData.day) &&
                    "cursor-default text-gray-400",
                  isSelected && "bg-main text-white",
                  isBetween && "bg-secondLight",
                  isToday && "border border-main",
                )}
                onClick={() => {
                  !isPastDate(dayData.year, dayData.month, dayData.day) &&
                    handleDateClick(dayData.day, dayData.month, dayData.year);
                }}
              >
                {dayData.day}
              </span>
            );
          })}
        </div>
      </div>

      <div className="self-end" onClick={handleApply}>
        <Button>Apply</Button>
      </div>
    </div>
  );
}
