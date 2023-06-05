// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import React from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/20/solid';

type ArrowIconProps = {
  iconLabel?: string;
  iconType: string;
  iconClasses?: string;
};

const ArrowIcon = ({ iconLabel, iconType, iconClasses }: ArrowIconProps) => (
  <div className={classNames('h-5 w-5', iconClasses)} aria-hidden="true">
    <span className="sr-only">{iconLabel}</span>
    {iconType && iconType === 'left' && <ChevronLeftIcon />}
    {iconType && iconType === 'right' && <ChevronRightIcon />}
    {iconType && iconType === 'down' && <ChevronDownIcon />}
    {iconType && iconType === 'ellips' && <EllipsisHorizontalIcon />}
  </div>
);

export default ArrowIcon;
