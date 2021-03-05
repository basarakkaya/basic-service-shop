import React from 'react';

const PlusLight = ({ style }) => {
  return (
    <svg
      width='52'
      height='52'
      viewBox='0 0 52 52'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={style}
    >
      <rect x='23' width='6' height='52' rx='3' fill='#C5C6CD' />
      <rect
        y='28'
        width='6'
        height='52'
        rx='3'
        transform='rotate(-90 0 28)'
        fill='#C5C6CD'
      />
    </svg>
  );
};

export default PlusLight;
