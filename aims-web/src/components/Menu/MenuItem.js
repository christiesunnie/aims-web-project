import React from 'react';
import cn from 'classnames';
import { Menu } from '@headlessui/react';

const MenuItem = ({ textContent, onClick }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          onClick={onClick}
          href='#'
          className={cn(
            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
            'block px-4 py-2 text-sm'
          )}>
          {textContent}
        </a>
      )}
    </Menu.Item>
  );
};

export default MenuItem;
