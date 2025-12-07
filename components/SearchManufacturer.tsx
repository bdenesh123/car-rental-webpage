"use client";

import { Fragment, useState } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  Transition,
} from "@headlessui/react";
import { manufacturers } from "@/constants";

interface Props {
  manufacturer: string;
  setManuFacturer: (value: string) => void;
}

const SearchManufacturer = ({ manufacturer, setManuFacturer }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  // Add "All Cars" as an option
  const options = ["All Cars", ...manufacturers];

  return (
    <div className="w-full relative">
      <Combobox value={manufacturer || "All Cars"} onChange={setManuFacturer}>
        <div className="relative w-full">
          <ComboboxButton
            className="w-full flex justify-between items-center border border-gray-300 rounded-lg px-3 py-2 cursor-pointer bg-white text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{manufacturer || "All Cars"}</span>
            {/* Dropdown arrow */}
            <svg
              className={`w-5 h-5 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </ComboboxButton>

          <Transition
            as={Fragment}
            show={isOpen}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ComboboxOptions className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-gray-900 py-1 text-base shadow-lg ring-1 ring-gray-300 focus:outline-none sm:text-sm">
              {options.map((item) => (
                <ComboboxOption
                  key={item}
                  value={item === "All Cars" ? "" : item} // empty string for all
                  className={({ active }) =>
                    `cursor-pointer select-none relative px-4 py-2 ${
                      active ? "bg-green-600 text-white" : "text-gray-900"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {item}
                    </span>
                  )}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
