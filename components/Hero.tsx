"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const element = document.getElementById("discover");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-20 md:py-32 gap-12 md:gap-20">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Rent Your Dream Car <br /> Anytime, Anywhere
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-md mx-auto md:mx-0">
            Explore the best cars in your city with fast booking, flexible
            rentals, and total convenience.
          </p>

          {/* Center button on mobile, left-aligned on desktop */}
          <div className="mt-10 flex justify-center md:justify-start">
            <CustomButton
              title="Explore Cars"
              containerStyles="bg-white text-green-700 px-8 py-4 rounded-full hover:bg-gray-100 transition"
              textStyles="font-bold text-lg"
              handleClick={handleScroll}
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full h-64 sm:h-72 md:h-96 lg:h-[28rem]">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/hero1.png"
              alt="hero car"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
          </div>
        </div>
      </div>

      {/* Decorative Shape */}
      <div className="absolute -bottom-20 left-0 w-full h-40 bg-emerald-700/30 rounded-t-full"></div>
    </section>
  );
};

export default Hero;
