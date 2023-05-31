import React from 'react';
import { format } from 'date-fns';

const DateDetailHeader = ({ selectedDay }) => (
  <div>
    <h1 className="text-base font-semibold leading-6 text-gray-900">
      <time dateTime="2022-01-22" className="sm:hidden">
        {format(selectedDay, 'MMMM dd, yyyy')}
      </time>
      <time dateTime="2022-01-22" className="hidden sm:inline">
        {format(selectedDay, 'MMM dd, yyyy')}
      </time>
    </h1>
    <p className="mt-1 text-sm text-gray-500">{format(selectedDay, 'EEEE')}</p>
  </div>
);

export default DateDetailHeader;
