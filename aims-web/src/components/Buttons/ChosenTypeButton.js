import React from 'react';

const ChosenTypeButton = ({ label, children, buttonStyles = '' }) => {
  return (
    <button
      type='button'
      className={`flex items-center justify-center text-gray-400 hover:text-gray-500 ${buttonStyles}`}>
      <span className='sr-only'>{label}</span>
      {children}
    </button>
  );
};

export default ChosenTypeButton;
