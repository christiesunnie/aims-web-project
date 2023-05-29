import { format, eachHourOfInterval, startOfToday, endOfToday } from 'date-fns';

const HoursRange = ({ containerOffset }) => {
  const hoursRange = eachHourOfInterval({
    start: startOfToday(),
    end: endOfToday(),
  });

  return (
    <div
      className='col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100'
      style={{ gridTemplateRows: 'repeat(48, minmax(3.5rem, 1fr))' }}>
      <div ref={containerOffset} className='row-end-1 h-7' />
      {hoursRange.map((hour) => (
        <>
          <div key={Math.random()}>
            <div className='sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
              {format(hour, 'h aa')}
            </div>
          </div>
          <div />
        </>
      ))}
      <div />
    </div>
  );
};

export default HoursRange;
