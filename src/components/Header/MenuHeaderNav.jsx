import { Menu } from '@headlessui/react';
import ArrowIcon from '../Buttons/ArrowIcon';
import ArrowsButton from '../Buttons/ArrowsButton';
import TransitionUI from '../../UI/Transition';
import MenuItem from '../Menu/MenuItem';

const MenuHeaderNav = ({ handleSelectedDayClick, handleTodayClick }) => (
  <div className="flex items-center">
    <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
      <div
        className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-gray-300"
        aria-hidden="true"
      />
      <ArrowsButton
        arrowsButtonClasses="flex items-center justify-center rounded-l-md py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
        handleArrowsButtonClick={() => handleSelectedDayClick('previous')}
        iconLabel="previous"
        iconType="left"
      />
      <button
        type="button"
        className="hidden px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
        onClick={handleTodayClick}
      >
        Today
      </button>
      <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
      <ArrowsButton
        arrowsButtonClasses="flex items-center justify-center rounded-r-md py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
        handleArrowsButtonClick={() => handleSelectedDayClick('next')}
        iconLabel="next"
        iconType="right"
      />
    </div>
    <div className="hidden md:ml-4 md:flex md:items-center">
      <Menu as="div" className="relative">
        <Menu.Button
          type="button"
          className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Day view
          <ArrowIcon iconType="down" iconClasses="-mr-1 text-gray-400" />
        </Menu.Button>

        <TransitionUI>
          <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <MenuItem itemText="Day view" handleMenuItemClick={null} />
          </Menu.Items>
        </TransitionUI>
      </Menu>
    </div>
    <Menu as="div" className="relative ml-6 md:hidden">
      <Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
        <ArrowIcon iconType="ellips" iconLabel="Open menu" />
      </Menu.Button>

      <TransitionUI>
        <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <MenuItem
            itemText="Go to today"
            handleMenuItemClick={handleTodayClick}
          />
        </Menu.Items>
      </TransitionUI>
    </Menu>
  </div>
);

export default MenuHeaderNav;
