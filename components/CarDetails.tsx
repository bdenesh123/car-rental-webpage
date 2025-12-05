"use client";

import { Fragment } from "react";
import Image from "next/image";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { CarProps } from "@/types";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-out duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="relative w-full max-w-lg max-h-[90vh] transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5 overflow-hidden">
                {/* Close Button */}
                <button
                  type="button"
                  className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full cursor-pointer"
                  onClick={closeModal}
                >
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>

                {/* Main Car Image */}
                <div className="relative w-full h-40  bg-cover bg-center rounded-lg">
                  <Image
                    src={car.images.main}
                    alt={`${car.make} ${car.model}`}
                    fill
                    priority
                    className="object-contain"
                  />
                </div>

                {/* Car Info */}
                <div className="flex-1 overflow-y-auto mt-3 pr-1">
                  <h2 className="font-semibold text-xl capitalize">
                    {car.make} {car.model}
                  </h2>

                  <div className="flex flex-col gap-4 mt-3">
                    <div className="flex justify-between">
                      <span className="text-grey">Year</span>
                      <span className="font-semibold">{car.year}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-grey">Fuel</span>
                      <span className="font-semibold capitalize">
                        {car.fuel}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-grey">Class</span>
                      <span className="font-semibold capitalize">
                        {car.class}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-grey">Transmission</span>
                      <span className="font-semibold">{car.transmission}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-grey">Seats</span>
                      <span className="font-semibold">{car.seats}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-grey">Drive</span>
                      <span className="font-semibold">
                        {car.drive.toUpperCase()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-grey">Fuel Economy</span>
                      <span className="font-semibold">{car.fuelEconomy}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-grey">Boot Space</span>
                      <span className="font-semibold">{car.bootSpace}</span>
                    </div>

                    {/* <div className="flex justify-between">
                      <span className="text-grey">Length</span>
                      <span className="font-semibold">{car.length}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-grey">Width</span>
                      <span className="font-semibold">{car.width}</span>
                    </div> */}

                    <div className="flex justify-between">
                      <span className="text-grey">Airbags</span>
                      <span className="font-semibold">{car.airbags}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-grey">Fuel Tank Capacity</span>
                      <span className="font-semibold">
                        {car.fuelTankCapacity}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-grey">Horsepower</span>
                      <span className="font-semibold">{car.horsepower}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-grey">Torque</span>
                      <span className="font-semibold">{car.torque}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-grey">0-100 km/h</span>
                      <span className="font-semibold">{car.acceleration}</span>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;
