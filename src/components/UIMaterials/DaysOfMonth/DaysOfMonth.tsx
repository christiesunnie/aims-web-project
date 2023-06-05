// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import React from 'react';
import { format, isEqual, isSameMonth, isToday } from 'date-fns';

type DaysOfMonthProps = {
  daysOfMonth: Date[];
  selectedDay: Date;
  selectedMonth: Date;
  // eslint-disable-next-line no-unused-vars
  handleSelectedDayClick: (day: Date) => void;
};

const DaysOfMonth = ({
  daysOfMonth,
  selectedDay,
  selectedMonth,
  handleSelectedDayClick,
}: DaysOfMonthProps) => (
  <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
    {daysOfMonth.map((day, dayIdx) => (
      <button
        onClick={() => handleSelectedDayClick(day)}
        key={Math.random()}
        type="button"
        className={classNames(
          'py-1.5 hover:bg-gray-100 focus:z-10',
          isSameMonth(day, selectedMonth) ? 'bg-white' : 'bg-gray-50',
          {
            'font-semibold': isEqual(day, selectedDay) || isToday(day),
          },
          { 'text-white': isEqual(day, selectedDay) },
          {
            'text-gray-900':
              !isEqual(day, selectedDay) &&
              isSameMonth(day, selectedMonth) &&
              !isToday(day),
          },
          {
            'text-gray-400':
              !isEqual(day, selectedDay) &&
              !isSameMonth(day, selectedMonth) &&
              !isToday(day),
          },
          {
            'text-indigo-600':
              isToday(day) &&
              !isEqual(day, selectedDay) &&
              isSameMonth(day, selectedMonth),
          },
          { 'rounded-tl-lg': dayIdx === 0 },
          { 'rounded-tr-lg': dayIdx === 6 },
          { 'rounded-bl-lg': dayIdx === daysOfMonth.length - 7 },
          { 'rounded-br-lg': dayIdx === daysOfMonth.length - 1 }
        )}
      >
        <time
          dateTime="2023-06-02"
          className={classNames(
            'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
            isEqual(day, selectedDay) && isToday(day) && 'bg-indigo-600',
            isEqual(day, selectedDay) && !isToday(day) && 'bg-gray-900'
          )}
        >
          {format(day, 'd')}
        </time>
      </button>
    ))}
  </div>
);

export default DaysOfMonth;
