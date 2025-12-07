"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import { SearchManuFacturerProps } from "@/types";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  manufacturer,
  setManuFacturer,
}: SearchManuFacturerProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer w-full relative">
      <Combobox
        value={manufacturer}
        onChange={(value: string | null) => setManuFacturer(value ?? "")}
      >
        <div className="relative w-full">
          <ComboboxButton
            className="absolute top-1/2 -translate-y-1/2 left-3"
            onClick={() => setIsOpen(true)}
          >
            <Image src="/car-logo.svg" width={20} height={20} alt="car logo" />
          </ComboboxButton>

          <ComboboxInput
            className="search-manufacturer__input text-base sm:text-lg"
            displayValue={(item: string) => item || ""}
            onChange={(event) => setQuery(event.target.value)}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 150)}
            placeholder="Volkswagen..."
            style={{ fontSize: "16px" }} // prevents mobile zoom
          />

          <Transition
            as={Fragment}
            show={isOpen}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions
              className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
              static
            >
              {filteredManufacturers.length === 0 && query !== "" ? (
                <ComboboxOption
                  value={query}
                  className="search-manufacturer__option"
                >
                  Create "{query}"
                </ComboboxOption>
              ) : (
                filteredManufacturers.map((item) => (
                  <ComboboxOption
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-green-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
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
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
