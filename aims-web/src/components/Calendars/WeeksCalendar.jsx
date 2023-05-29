import React from 'react';
import classNames from 'classnames';

import {
  format,
  startOfToday,
  isEqual,
  isToday,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
} from 'date-fns';

const WeeksCalendar = ({
  containerNav,
  selectedDay,
  handleSelectedDayClick,
}) => {
  const daysOfWeek = eachDayOfInterval({
    start: startOfWeek(selectedDay),
    end: endOfWeek(selectedDay),
  });

  return (
    <div
      ref={containerNav}
      className="sticky top-0 z-10 grid flex-none grid-cols-7 bg-white text-xs text-gray-500 shadow ring-1 ring-black ring-opacity-5 md:hidden"
    >
      {daysOfWeek.map((day) => (
        <div
          key={Math.random()}
          className="flex items-center justify-center py-3"
        >
          <span
            className={classNames({
              'flex items-baseline': isEqual(day, startOfToday()),
            })}
          >
            <button
              type="button"
              className="flex flex-col items-center pb-1.5 pt-3"
              onClick={() => handleSelectedDayClick(day)}
            >
              <span>{format(day, 'eee')}</span>

              <span
                className={classNames(
                  'mt-3  flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold',
                  {
                    'bg-indigo-600 text-white':
                      isEqual(day, selectedDay) && isEqual(day, startOfToday()),
                  },
                  {
                    'text-white bg-gray-900':
                      isEqual(day, selectedDay) && !isToday(day),
                  },
                  {
                    'text-gray-900':
                      !isEqual(day, selectedDay) && !isToday(day),
                  },
                  {
                    'text-indigo-600':
                      !isEqual(day, selectedDay) && isToday(day),
                  }
                )}
              >
                {format(day, 'd')}
              </span>
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default WeeksCalendar;
