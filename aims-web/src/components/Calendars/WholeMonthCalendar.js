import React from 'react';
import cn from 'classnames';
import { format, isEqual, isSameMonth, isToday } from 'date-fns';

const WholeMonthCalendar = ({ days, selectedDay, onClick }) => {
  return (
    <div className='isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200'>
      {days.map((day, dayIdx) => {
        const formattedDay = format(day, 'yyyy-MM-dd');
        return (
          <button
            onClick={() => onClick(day)}
            key={dayIdx}
            type='button'
            className={cn(
              'py-1.5 hover:bg-gray-100 focus:z-10',
              isSameMonth(day, selectedDay) ? 'bg-white' : 'bg-gray-50',
              (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',
              isEqual(day, selectedDay) && 'text-white',
              !isEqual(day, selectedDay) &&
                isSameMonth(day, selectedDay) &&
                !isToday(day) &&
                'text-gray-900',
              !isEqual(day, selectedDay) &&
                !isSameMonth(day, selectedDay) &&
                !isToday(day) &&
                'text-gray-400',
              isToday(day) && !isEqual(day, selectedDay) && 'text-indigo-600',
              dayIdx === 0 && 'rounded-tl-lg',
              dayIdx === 6 && 'rounded-tr-lg',
              dayIdx === days.length - 7 && 'rounded-bl-lg',
              dayIdx === days.length - 1 && 'rounded-br-lg'
            )}>
            <time
              dateTime={formattedDay}
              className={cn(
                'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                isEqual(day, selectedDay) && isToday(day) && 'bg-indigo-600',
                isEqual(day, selectedDay) && !isToday(day) && 'bg-gray-900'
              )}>
              {formattedDay.split('-').pop().replace(/^0/, '')}
            </time>
          </button>
        );
      })}
    </div>
  );
};

export default WholeMonthCalendar;
