import React from 'react';

const ChevronLeft = ({ style }) => {
  return (
    <svg
      width='10'
      height='16'
      viewBox='0 0 10 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={style}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8.65392 16C8.30964 16 7.96506 15.8789 7.70214 15.6358L0.39423 8.87989C0.142078 8.64649 0 8.33014 0 7.99997C0 7.67006 0.142078 7.35344 0.393931 7.12004L7.70214 0.364398C8.22738 -0.121466 9.07985 -0.121466 9.6051 0.364398C10.1312 0.850539 10.1312 1.6381 9.6051 2.12424L3.24956 7.99997L9.6054 13.8757C10.1315 14.3616 10.1315 15.1494 9.6054 15.6355C9.34278 15.8783 8.9982 16 8.65392 16Z'
        fill='#111321'
      />
    </svg>
  );
};

export default ChevronLeft;
