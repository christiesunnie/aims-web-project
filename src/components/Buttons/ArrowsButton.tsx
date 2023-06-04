import React from 'react';
import ArrowIcon from './ArrowIcon';

type ArrowsButtonProps = {
  arrowsButtonClasses?: string;
  handleArrowsButtonClick: () => void;
  iconLabel: string;
  iconType: string;
};

const ArrowsButton = ({
  arrowsButtonClasses,
  handleArrowsButtonClick,
  iconLabel,
  iconType,
}: ArrowsButtonProps) => {
  const arrowsIconLabel =
    iconLabel === 'previous' ? 'Previous arrow' : 'Next arrow';
  const arrowsIconType = iconType === 'left' ? 'left' : 'right';
  return (
    <button
      type="button"
      className={arrowsButtonClasses}
      onClick={handleArrowsButtonClick}
    >
      <ArrowIcon iconLabel={arrowsIconLabel} iconType={arrowsIconType} />
    </button>
  );
};

export default ArrowsButton;
