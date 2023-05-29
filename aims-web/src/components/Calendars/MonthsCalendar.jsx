import React from 'react';
import { format } from 'date-fns';
import ArrowsButton from '../Buttons/ArrowsButton';
import DaysOfMonthCalendar from './DaysOfMonthCalendar';

const MonthsCalendar = ({
  handleMonthClick,
  daysOfMonth,
  selectedDay,
  selectedMonth,
  handleSelectedDayClick,
}) => {
  return (
    <div className="hidden w-1/2 max-w-md flex-none border-l border-gray-100 px-8 py-10 md:block">
      <div className="flex items-center text-center text-gray-900">
        <ArrowsButton
          arrowsButtonClasses="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          handleArrowsButtonClick={() => handleMonthClick('previous')}
          iconLabel="previous"
          iconType="left"
        />
        <div className="flex-auto text-sm font-semibold">
          {format(selectedMonth, 'MMM yyyy')}
        </div>
        <ArrowsButton
          arrowsButtonClasses="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          handleArrowsButtonClick={() => handleMonthClick('next')}
          iconLabel="next"
          iconType="right"
        />
      </div>
      <div className="mt-6 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
      <DaysOfMonthCalendar
        daysOfMonth={daysOfMonth}
        selectedMonth={selectedMonth}
        selectedDay={selectedDay}
        handleSelectedDayClick={handleSelectedDayClick}
      />
    </div>
  );
};

export default MonthsCalendar;
