import React from 'react';
import { isSameDay, parseISO, intervalToDuration } from 'date-fns';
import events from '../../data/data';

type DayMeetingsProps = {
  selectedDay: number | Date;
};

interface MeetingProps {
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

const DayMeetings = ({ selectedDay }: DayMeetingsProps) => {
  const selectedDayMeetings = events.filter((meeting: MeetingProps) => {
    const isTheSameDay = isSameDay(
      parseISO(meeting.startDatetime),
      selectedDay
    );
    return isTheSameDay;
  });

  const getMeetingDuration = (meeting: MeetingProps): number => {
    const meetingDuration = intervalToDuration({
      start: parseISO(meeting.startDatetime),
      end: parseISO(meeting.endDatetime),
    }) as DurationProps;
    const { minutes, hours } = meetingDuration;
    return minutes / 60 + hours;
  };

  const renderedSelectedDayMeetings = selectedDayMeetings.map((meeting) => (
    <li
      className="relative mt-px flex"
      style={{
        gridRow: `${
          (parseISO(meeting.startDatetime).getMinutes() / 60 +
            parseISO(meeting.startDatetime).getHours()) *
            12 +
          2
        } / span ${getMeetingDuration(meeting) * 12}`,
      }}
    >
      <a
        href="#"
        className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
      >
        <p className="order-1 font-semibold text-blue-700">
          {meeting.description}
        </p>
        <p className="text-blue-500 group-hover:text-blue-700">
          <time dateTime={meeting.startDatetime}>{meeting.start}</time>
        </p>
      </a>
    </li>
  ));

  // eslint-disable-next-line consistent-return, react/jsx-no-useless-fragment
  return <>{selectedDayMeetings.length > 0 && renderedSelectedDayMeetings}</>;
};

export default DayMeetings;
