import { Menu } from '@headlessui/react';
import classNames from 'classnames';

const MenuItem = ({ itemText, handleMenuItemClick }) => {
  return (
    <div className='py-1'>
      <Menu.Item>
        {({ active }) => (
          <a
            href='#'
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block px-4 py-2 text-sm'
            )}
            onClick={handleMenuItemClick}>
            {itemText}
          </a>
        )}
      </Menu.Item>
    </div>
  );
};

export default MenuItem;
