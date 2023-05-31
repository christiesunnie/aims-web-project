import React from 'react';
import { isSameDay, parseISO, intervalToDuration } from 'date-fns';
import events from '../../data/data';

const DayMeetings = ({ selectedDay }) => {
  const selectedDayMeetings = events.filter((meeting) => {
    const isTheSameDay = isSameDay(
      parseISO(meeting.startDatetime),
      selectedDay
    );
    return isTheSameDay;
  });

  const getMeetingDuration = (meeting) => {
    const meetingDuration = intervalToDuration({
      start: parseISO(meeting.startDatetime),
      end: parseISO(meeting.endDatetime),
    });
    return meetingDuration.minutes / 60 + meetingDuration.hours;
  };

  if (selectedDayMeetings.length < 0) return;

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
  return <>{renderedSelectedDayMeetings}</>;
};

export default DayMeetings;
