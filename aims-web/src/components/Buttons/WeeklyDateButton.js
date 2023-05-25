import React from 'react';
import cn from 'classnames';
import { isEqual, isToday, format } from 'date-fns';

const WeeklyDateButton = ({ daysOfWeek, selectedDay, onClick }) => {
  const renderredDaysOfWeek = daysOfWeek.map((day, i) => {
    const formattedDay = format(day, 'eeeee');
    const formattedDate = format(day, 'd');

    return (
      <button
        onClick={() => onClick(day)}
        key={i}
        type='button'
        className='flex flex-col items-center pb-1.5 pt-3'>
        <span>{formattedDay}</span>
        <span
          className={cn(
            'mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold',
            isEqual(day, selectedDay) &&
              isToday(day, selectedDay) &&
              'bg-indigo-600 text-white',
            !isEqual(day, selectedDay) &&
              isToday(day, selectedDay) &&
              'text-indigo-600',
            isEqual(day, selectedDay) &&
              !isToday(day, selectedDay) &&
              'text-white bg-gray-900',
            !isEqual(day, selectedDay) &&
              !isToday(day, selectedDay) &&
              'text-gray-900'
          )}>
          {formattedDate}
        </span>
      </button>
    );
  });

  return <>{renderredDaysOfWeek}</>;
};

export default WeeklyDateButton;
