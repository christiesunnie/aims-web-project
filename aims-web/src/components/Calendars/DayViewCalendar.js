import { useEffect, useRef, useState } from 'react';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/20/solid';
import { Menu } from '@headlessui/react';

import { days, time, schedule } from '../../data/data';
import MonthButton from '../Buttons/MonthButton';
import MenuItem from '../Menu/MenuItem';
import TimeView from './TimeView';
import DateButton from '../Buttons/DateButton';
import TransitionComponent from '../../UI/TransitionComponent';
import ScheduleItems from '../Events/ScheduleItems';
import WholeMonthCalendar from './WholeMonthCalendar';

import {
  startOfToday,
  endOfToday,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  eachDayOfInterval,
} from 'date-fns';

export default function DayViewCalendar() {
  const container = useRef(null);
  const containerNav = useRef(null);
  const containerOffset = useRef(null);

  // Set dynamic selected day
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);

  // Set dynamic selected month
  const firstDayofTheCurrentMonth = startOfMonth(today);
  const firstDayofTheSelectedMonth = startOfMonth(selectedDay);
  const [selectedMonth, setSelectedMonth] = useState(
    firstDayofTheSelectedMonth
  );

  // Set dynamic the week of selected day
  const startDayOfCurrentWeek = startOfWeek(today);
  const [selectedWeek, setSelectedWeek] = useState(startDayOfCurrentWeek);

  // Day range of the selected month
  const daysOfCurrentMonth = eachDayOfInterval({
    start: firstDayofTheCurrentMonth,
    end: endOfMonth(firstDayofTheCurrentMonth),
  });
  const [daysOfSelectedMonth, setDaysOfSelectedMonth] =
    useState(daysOfCurrentMonth);

  // Set hour range of a day
  const hoursRange = eachDayOfInterval({
    start: startOfToday(),
    end: endOfToday(),
  });

  useEffect(() => {
    // Set the container scroll position based on the current time.
    const currentMinute = new Date().getHours() * 60;
    container.current.scrollTop =
      ((container.current.scrollHeight -
        containerNav.current.offsetHeight -
        containerOffset.current.offsetHeight) *
        currentMinute) /
      1440;
  }, []);

  return (
    <div className='flex h-full flex-col'>
      <header className='flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4'>
        <div>
          <h1 className='text-base font-semibold leading-6 text-gray-900'>
            <time dateTime='2022-01-22' className='sm:hidden'>
              {format(today, 'MMMM dd, yyy')}
            </time>
            <time dateTime='2022-01-22' className='hidden sm:inline'>
              {format(today, 'MMM dd, yyy')}
            </time>
          </h1>
          <p className='mt-1 text-sm text-gray-500'>{format(today, 'EEEE')}</p>
        </div>
        <div className='flex items-center'>
          <div className='relative flex items-center rounded-md bg-white shadow-sm md:items-stretch'>
            <div
              className='pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-gray-300'
              aria-hidden='true'
            />
            <MonthButton
              month='Previous day'
              buttonStyles='rounded-l-md py-2 pl-3 pr-4 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50'>
              <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
            </MonthButton>
            <button
              type='button'
              className='hidden px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block'>
              Today
            </button>
            <span className='relative -mx-px h-5 w-px bg-gray-300 md:hidden' />
            <MonthButton
              month='Next day'
              buttonStyles='rounded-l-md py-2 pl-3 pr-4 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50'>
              <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
            </MonthButton>
          </div>
          <div className='hidden md:ml-4 md:flex md:items-center'>
            <Menu as='div' className='relative'>
              <Menu.Button
                type='button'
                className='flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                Day view
                <ChevronDownIcon
                  className='-mr-1 h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </Menu.Button>
              <TransitionComponent>
                <div className='py-1'>
                  <MenuItem textContent='Day view' />
                  <MenuItem textContent='Week view' />
                  <MenuItem textContent='Month view' />
                  <MenuItem textContent='Year view' />
                </div>
              </TransitionComponent>
            </Menu>
          </div>
          <Menu as='div' className='relative ml-6 md:hidden'>
            <Menu.Button className='-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>Open menu</span>
              <EllipsisHorizontalIcon className='h-5 w-5' aria-hidden='true' />
            </Menu.Button>

            <TransitionComponent menuItemsStyles='divide-y divide-gray-100'>
              <div className='py-1'>
                <MenuItem textContent='Create event' />
              </div>
              <div className='py-1'>
                <MenuItem textContent='Go to today' />
              </div>
              <div className='py-1'>
                <MenuItem textContent='Day view' />
                <MenuItem textContent='Week view' />
                <MenuItem textContent='Month view' />
                <MenuItem textContent='Year view' />
              </div>
            </TransitionComponent>
          </Menu>
        </div>
      </header>
      <div className='isolate flex flex-auto overflow-hidden bg-white'>
        <div ref={container} className='flex flex-auto flex-col overflow-auto'>
          <div
            ref={containerNav}
            className='sticky top-0 z-10 grid flex-none grid-cols-7 bg-white text-xs text-gray-500 shadow ring-1 ring-black ring-opacity-5 md:hidden'>
            <DateButton day='W' date='19' />
            <DateButton day='T' date='20' />
            <DateButton day='F' date='21' />
            <DateButton day='S' date='22' />
            <DateButton day='S' date='23' />
            <DateButton day='M' date='24' />
            <DateButton day='T' date='25' />
          </div>
          <div className='flex w-full flex-auto'>
            <div className='w-14 flex-none bg-white ring-1 ring-gray-100' />
            <div className='grid flex-auto grid-cols-1 grid-rows-1'>
              {/* Horizontal lines */}
              <div
                className='col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100'
                style={{ gridTemplateRows: 'repeat(48, minmax(3.5rem, 1fr))' }}>
                <div ref={containerOffset} className='row-end-1 h-7'></div>
                {hoursRange.map((hour, i) => {
                  return <TimeView key={i} time={`${format(hour, 'h aa')}`} />;
                })}
              </div>

              {/* Events */}
              <ScheduleItems schedule={schedule} />
            </div>
          </div>
        </div>
        <div className='hidden w-1/2 max-w-md flex-none border-l border-gray-100 px-8 py-10 md:block'>
          <div className='flex items-center text-center text-gray-900'>
            <MonthButton
              month='Previous month'
              buttonStyles='-m-1.5 flex-none p-1.5'>
              <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
            </MonthButton>
            <div className='flex-auto text-sm font-semibold'>January 2022</div>
            <MonthButton
              month='Next month'
              buttonStyles='-m-1.5 flex-none p-1.5'>
              <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
            </MonthButton>
          </div>
          <div className='mt-6 grid grid-cols-7 text-center text-xs leading-6 text-gray-500'>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
          <WholeMonthCalendar days={days} />
        </div>
      </div>
    </div>
  );
}
