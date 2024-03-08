"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'


const Slider = () => {

    const data = [
        {
        id: 1,
        title: 'Always Fresh & always Crispy & always Hot',
        image: '/slide1.png'
    },
    {
        id: 2,
        title: 'We deliver your order wherever you are in Oulu',
        image: '/slide2.png'
    },
    {
        id: 3,
        title: 'The best pizza to share with your family, try it now!',
        image: '/slide3.jpeg'
    },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(interval);
    }
    , []);

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
        <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-600 font-bold'>
            <h1 className='text-5xl uppercase p-4 text-center md:p-10 md:text-6xl xl:text-7xl'>
                {data[currentSlide].title}
            </h1>
            <button className='bg-red-500 text-white py-4 px-8'>
                Order Now
            </button>
        </div>

        <div className='flex-1 relative'>
            <Image src={data[currentSlide].image} alt='slide1' fill className='object-cover' />
        </div>

    </div>
  )
}

export default Slider