"use client";

import { useState } from "react";
import Image from "next/image";

import CustomButton from "./CustomButton";

import { calculateCarRentPerHour } from "@/utils";
import CarDetails from "./CarDetails";
import { Car } from "@/constants/cars";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const { year, make, model, transmission, drive, fuelEconomy, images } = car;

  const [isOpen, setIsOpen] = useState(false);

  const carRentPerHour = calculateCarRentPerHour(car);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
        <p className="text-sm text-gray-500">{year}</p>
      </div>

      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          RM
        </span>
        {carRentPerHour}
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /hour
        </span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={images.main}
          alt={`${make} ${model}`}
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative w-full mt-2">
        {/* Icons */}
        <div className="flex justify-between text-gray-500 group-hover:invisible">
          <div className="flex flex-col items-center gap-1">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px] leading-[17px]">{transmission}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Image src="/tire.svg" width={20} height={20} alt="drive" />
            <p className="text-[14px] leading-[17px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Image src="/gas.svg" width={20} height={20} alt="fuel" />
            <p className="text-[14px] leading-[17px]">{fuelEconomy}</p>
          </div>
        </div>

        {/* Desktop View: Button overlays icons on hover */}
        <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none sm:pointer-events-auto">
          <CustomButton
            title="View More"
            containerStyles="w-11/12 py-[16px] rounded-full bg-green-600 hover:bg-green-700 transition pointer-events-auto"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>

        {/* Mobile View: Always visible at the bottom */}
        <div className="mt-3 sm:hidden w-full">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-green-600 hover:bg-green-700 transition"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
