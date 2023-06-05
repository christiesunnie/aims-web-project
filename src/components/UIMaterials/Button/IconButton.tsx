import React from 'react';
import ArrowIcon from './ArrowIcon';

type IconButtonProps = {
  iconButtonClasses?: string;
  handleIconButtonClick: () => void;
  iconLabel: string;
  iconType: string;
};

const IconButton = ({
  iconButtonClasses,
  handleIconButtonClick,
  iconLabel,
  iconType,
}: IconButtonProps) => {
  const arrowsIconLabel =
    iconLabel === 'previous' ? 'Previous arrow' : 'Next arrow';
  const arrowsIconType = iconType === 'left' ? 'left' : 'right';
  return (
    <button
      type="button"
      className={iconButtonClasses}
      onClick={handleIconButtonClick}
    >
      <ArrowIcon iconLabel={arrowsIconLabel} iconType={arrowsIconType} />
    </button>
  );
};

export default IconButton;
