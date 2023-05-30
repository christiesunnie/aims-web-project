import { useEffect, useRef, useState } from 'react';

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
import DateDetailHeader from '../Header/DateDetailHeader';
import MenuHeaderNav from '../Header/MenuHeaderNav';
import MonthsCalendar from './MonthsCalendar';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import HoursCalendar from './HoursCalendar';
import WeeksCalendar from './WeeksCalendar';

export default function DayViewCalendar() {
  const container = useRef(null);
  const containerNav = useRef(null);
  const containerOffset = useRef(null);

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

  const handleSelectedDayClick = (dayType) => {
    const newSelectedDay = add(selectedDay, {
      days: dayType === 'previous' ? -1 : 1,
    });
    setSelectedDay(newSelectedDay);
    if (!isSameMonth(newSelectedDay, selectedMonth)) {
      setSelectedMonth(startOfMonth(newSelectedDay));
    }
  };

  const handleMonthClick = (monthType) => {
    setSelectedMonth(
      add(selectedMonth, {
        months: monthType === 'previous' ? -1 : 1,
      })
    );
  };

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
        <DateDetailHeader selectedDay={selectedDay} />
        <MenuHeaderNav
          handleSelectedDayClick={handleSelectedDayClick}
          handleTodayClick={handleTodayClick}
        />
      </header>
      <div className="isolate flex flex-auto overflow-hidden bg-white">
        <div ref={container} className="flex flex-auto flex-col overflow-auto">
          <WeeksCalendar
            containerNav={containerNav}
            selectedDay={selectedDay}
            handleSelectedDayClick={(day) => setSelectedDay(day)}
          />
          <HoursCalendar
            containerOffset={containerOffset}
            selectedDay={selectedDay}
          />
        </div>
        {/* Tablet + Desktop calendar view */}
        <MonthsCalendar
          daysOfMonth={daysOfMonth}
          selectedDay={selectedDay}
          selectedMonth={selectedMonth}
          handleSelectedDayClick={(day) => setSelectedDay(day)}
          handleMonthClick={handleMonthClick}
        />
      </div>
    </div>
  );
}
