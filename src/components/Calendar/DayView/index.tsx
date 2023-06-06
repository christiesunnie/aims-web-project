/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import {
  startOfToday,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  eachDayOfInterval,
  endOfWeek,
  add,
  isSameMonth,
} from 'date-fns';
import DateHeader from '../../UIMaterials/Header/DateHeader';
import MenuHeaderNav from '../../UIMaterials/Header/MenuHeaderNav';
import MiniMonthNavigator from './Page/MiniMonthNavigator';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import HourlyCalendar from './Page/HourlyCalendar';
import WeeklyCalendar from './Page/WeeklyCalendar';

export default function DayView() {
  const container = useRef<HTMLHeadingElement>(null!);
  const containerNav = useRef<HTMLHeadingElement>(null!);
  const containerOffset = useRef<HTMLHeadingElement>(null!);

  // Set dynamic selected day
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);

  // Set dynamic selected month
  const firstDayofTheCurrentMonth = startOfMonth(today);
  const firstDayofTheSelectedMonth = startOfMonth(selectedDay);
  const [selectedMonth, setSelectedMonth] = useState(
    firstDayofTheSelectedMonth
  );

  // Day range of the current month
  const daysOfCurrentMonth = eachDayOfInterval({
    start: startOfWeek(firstDayofTheCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayofTheCurrentMonth)),
  });

  const [daysOfMonth, setDaysOfSelectedMonth] = useState(daysOfCurrentMonth);

  const handleTodayClick = () => {
    setSelectedDay(today);
    setSelectedMonth(startOfMonth(today));
  };

  const handleSelectedDayClick = (dayType: string) => {
    const newSelectedDay = add(selectedDay, {
      days: dayType === 'previous' ? -1 : 1,
    });
    setSelectedDay(newSelectedDay);
    if (!isSameMonth(newSelectedDay, selectedMonth)) {
      setSelectedMonth(startOfMonth(newSelectedDay));
    }
  };

  const handleMonthClick = (monthType: string) => {
    setSelectedMonth(
      add(selectedMonth, {
        months: monthType === 'previous' ? -1 : 1,
      })
    );
  };

  useEffect(() => {
    const url = 'http://localhost:3001/api/schedule';

    axios.get(url).then((response) => console.log(response));
  });

  useEffect(() => {
    // Day range of the selected month
    const daysOfSelectedMonth = eachDayOfInterval({
      start: startOfWeek(startOfMonth(selectedMonth)),
      end: endOfWeek(endOfMonth(selectedMonth)),
    });
    setDaysOfSelectedMonth(daysOfSelectedMonth);
  }, [selectedMonth]);

  useEffect(() => {
    // Set the container scroll position based on the current time.
    const currentMinute = new Date().getHours() * 60;
    container.current.scrollTop =
      ((container.current.scrollHeight -
        containerNav.current.offsetHeight -
        containerOffset.current.offsetHeight) *
        currentMinute) /
      1440;
  }, []);

  return (
    <div className="flex h-full flex-col">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4">
        <DateHeader selectedDay={selectedDay} />
        <MenuHeaderNav
          handleSelectedDayClick={handleSelectedDayClick}
          handleTodayClick={handleTodayClick}
        />
      </header>
      <div className="isolate flex flex-auto overflow-hidden bg-white">
        <div ref={container} className="flex flex-auto flex-col overflow-auto">
          {/* Week view on mobile */}
          <WeeklyCalendar
            containerNav={containerNav}
            selectedDay={selectedDay}
            handleSelectedDayClick={(day: Date) => setSelectedDay(day)}
          />
          <HourlyCalendar
            containerOffset={containerOffset}
            selectedDay={selectedDay}
          />
        </div>
        {/* Month view on tablet + desktop */}
        <MiniMonthNavigator
          daysOfMonth={daysOfMonth}
          selectedDay={selectedDay}
          selectedMonth={selectedMonth}
          handleSelectedDayClick={(day: Date) => setSelectedDay(day)}
          handleMonthClick={handleMonthClick}
        />
      </div>
    </div>
  );
}
