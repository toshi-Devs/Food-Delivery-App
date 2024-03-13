// "use client"

// import React from 'react'
// import Countdown from 'react-countdown'

// const endingDate = new Date('2024-03-31')

// const CountDown = () => {
//   return (
//         <Countdown className='font-bold text-yellow-400 text-5xl' date={endingDate}/>
//   )
// }

// export default CountDown;

/// Lazy loading was making the errors for me 

"use client"

import React from 'react';
import dynamic from 'next/dynamic';
import Countdown from 'react-countdown';

const endingDate = new Date('2024-03-31');

const CountDown: React.FC = () => {
  return (
    <Countdown className='font-bold text-yellow-400 text-5xl' date={endingDate} />
  );
};

export default dynamic(() => Promise.resolve(CountDown), { ssr: false });
