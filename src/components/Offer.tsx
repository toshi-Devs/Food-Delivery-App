"use client"

import Image from "next/image";
import React from "react";
import CountDown from "./Countdown";
import { useRouter } from "next/navigation";

const Offer = () => {

  const router = useRouter()

    const handleClick = () => {
        router.push(`/menu/burgers`)
    }

  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">Delicious Burger & French Fries</h1>
        <p className="text-white xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
          <div>
          <CountDown />
          </div>
        
        <button className="bg-red-500 text-white rounded-md py-3 px-6" onClick={handleClick}>Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;