import React from 'react';
import { isSameDay, parseISO, intervalToDuration } from 'date-fns';
import events from '../../../../utils/mocks/data';

type EventsProps = {
  selectedDay: number | Date;
};

interface EventProps {
  id: number;
  name: string;
  imageUrl: string;
  start: string;
  startDatetime: string;
  end: string;
  endDatetime: string;
  description: string;
}

interface DurationProps {
  days: number;
  hours: number;
  minutes: number;
  months: number;
  seconds: number;
  years: number;
}

const Events = ({ selectedDay }: EventsProps) => {
  const selectedDayEvents = events.filter((event: EventProps) => {
    const isTheSameDay = isSameDay(parseISO(event.startDatetime), selectedDay);
    return isTheSameDay;
  });

  const getEventDuration = (event: EventProps): number => {
    const eventDuration = intervalToDuration({
      start: parseISO(event.startDatetime),
      end: parseISO(event.endDatetime),
    }) as DurationProps;
    const { minutes, hours } = eventDuration;
    return minutes / 60 + hours;
  };

  const renderedSelectedDayEvents = selectedDayEvents.map((event) => (
    <li
      className="relative mt-px flex"
      style={{
        gridRow: `${
          (parseISO(event.startDatetime).getMinutes() / 60 +
            parseISO(event.startDatetime).getHours()) *
            12 +
          2
        } / span ${getEventDuration(event) * 12}`,
      }}
    >
      <a
        href="#"
        className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
      >
        <p className="order-1 font-semibold text-blue-700">
          {event.description}
        </p>
        <p className="text-blue-500 group-hover:text-blue-700">
          <time dateTime={event.startDatetime}>{event.start}</time>
        </p>
      </a>
    </li>
  ));

  // eslint-disable-next-line consistent-return, react/jsx-no-useless-fragment
  return <>{selectedDayEvents.length > 0 && renderedSelectedDayEvents}</>;
};

export default Events;
