import React from 'react';
import HoursRange from '../../../UIMaterials/HoursRange/HoursRange';
import Events from '../Events';

type HourlyCalendarProps = {
  containerOffset: React.MutableRefObject<HTMLHeadingElement>;
  selectedDay: Date;
};

const HourlyCalendar = ({
  containerOffset,
  selectedDay,
}: HourlyCalendarProps) => (
  <div className="flex w-full flex-auto">
    <div className="w-14 flex-none bg-white ring-1 ring-gray-100" />
    <div className="grid flex-auto grid-cols-1 grid-rows-1">
      {/* Horizontal lines */}
      <HoursRange containerOffset={containerOffset} />
      {/* Events */}
      <ol
        className="col-start-1 col-end-2 row-start-1 grid grid-cols-1"
        style={{
          gridTemplateRows: '1.75rem repeat(288, minmax(0, 1fr)) auto',
        }}
      >
        <Events selectedDay={selectedDay} />
      </ol>
    </div>
  </div>
);

export default HourlyCalendar;
