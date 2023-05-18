import React from 'react';

const DateButton = ({ day, date }) => {
  return (
    <button type='button' className='flex flex-col items-center pb-1.5 pt-3'>
      <span>{day}</span>
      <span className='mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900'>
        {date}
      </span>
    </button>
  );
};

export default DateButton;
