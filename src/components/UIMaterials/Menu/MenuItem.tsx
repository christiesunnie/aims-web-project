// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import React from 'react';
import { Menu } from '@headlessui/react';

type MenuItemProps = {
  itemText: string;
  handleMenuItemClick?: () => void;
};

const MenuItem = ({ itemText, handleMenuItemClick }: MenuItemProps) => (
  <div className="py-1">
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
            'block px-4 py-2 text-sm'
          )}
          onClick={handleMenuItemClick}
        >
          {itemText}
        </a>
      )}
    </Menu.Item>
  </div>
);

export default MenuItem;
