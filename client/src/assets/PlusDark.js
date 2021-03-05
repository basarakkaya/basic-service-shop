import React from 'react';

const PlusDark = ({ style }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={style}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 3V21V3Z'
        fill='#111321'
      />
      <path
        d='M12 3V21'
        stroke='#111321'
        strokeWidth='3'
        strokeLinecap='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 12H21H3Z'
        fill='#111321'
      />
      <path
        d='M3 12H21'
        stroke='#111321'
        strokeWidth='3'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default PlusDark;
