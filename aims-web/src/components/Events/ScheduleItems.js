import React from 'react';

import ScheduleItem from './ScheduleItem';

const ScheduleItems = ({ schedule }) => {
  return (
    <ol
      className='col-start-1 col-end-2 row-start-1 grid grid-cols-1'
      style={{
        gridTemplateRows: '1.75rem repeat(288, minmax(0, 1fr)) auto',
      }}>
      {schedule.map((item) => {
        return (
          <ScheduleItem
            key={item.id}
            activity={item.activity}
            location={item.location}
            startTime={item.startTime}
            gridRow={item.gridRow}
          />
        );
      })}
    </ol>
  );
};

export default ScheduleItems;
