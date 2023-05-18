import React from 'react';

const Schedule = ({ activity, location, startTime, gridRow }) => {
  return (
    <li className='relative mt-px flex' style={{ gridRow: gridRow }}>
      <a
        href='#'
        className={`group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100`}>
        <p className={`order-1 font-semibold text-blue-700`}>{activity}</p>
        <p className={`order-1 text-blue-500 group-hover:text-blue-700`}>
          {location}
        </p>
        <p className={`text-blue-500 group-hover:text-blue-700`}>
          <time dateTime='2022-01-22T11:00'>{startTime}</time>
        </p>
      </a>
    </li>
  );
};

export default Schedule;
