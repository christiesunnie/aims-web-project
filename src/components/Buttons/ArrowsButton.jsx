import ArrowIcon from './ArrowIcon';

const ArrowsButton = ({
  arrowsButtonClasses,
  handleArrowsButtonClick,
  iconLabel,
  iconType,
}) => {
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
