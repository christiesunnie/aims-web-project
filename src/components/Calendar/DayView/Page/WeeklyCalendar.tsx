import React from 'react';
import DaysOfWeek from '../../../UIMaterials/DaysOfWeek/DaysOfWeek';

type WeeklyCalendarProps = {
  containerNav: React.MutableRefObject<HTMLHeadingElement>;
  selectedDay: Date;
  // eslint-disable-next-line no-unused-vars
  handleSelectedDayClick: (day: Date) => void;
};

const WeeklyCalendar = ({
  containerNav,
  selectedDay,
  handleSelectedDayClick,
}: WeeklyCalendarProps) => (
  <div
    ref={containerNav}
    className="sticky top-0 z-10 grid flex-none grid-cols-7 bg-white text-xs text-gray-500 shadow ring-1 ring-black ring-opacity-5 md:hidden"
  >
    <DaysOfWeek
      selectedDay={selectedDay}
      handleSelectedDayClick={handleSelectedDayClick}
    />
  </div>
);

export default WeeklyCalendar;
