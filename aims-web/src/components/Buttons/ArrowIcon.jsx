import React from 'react';
import classNames from 'classnames';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/20/solid';

const ArrowIcon = ({ iconLabel = '', iconType, iconClasses = '' }) => {
  return (
    <div className={classNames('h-5 w-5', iconClasses)} aria-hidden="true">
      <span className="sr-only">{iconLabel}</span>
      {iconType && iconType === 'left' && <ChevronLeftIcon />}
      {iconType && iconType === 'right' && <ChevronRightIcon />}
      {iconType && iconType === 'down' && <ChevronDownIcon />}
      {iconType && iconType === 'ellips' && <EllipsisHorizontalIcon />}
    </div>
  );
};

export default ArrowIcon;
