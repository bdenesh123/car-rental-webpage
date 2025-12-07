"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchManufacturerDropdown from "./SearchManufacturer";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [manufacturer, setManuFacturer] = useState(
    searchParams.get("manufacturer") || ""
  );

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (manufacturer) {
      params.set("manufacturer", manufacturer);
    } else {
      params.delete("manufacturer");
    }

    router.push(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="searchbar__item flex gap-2 w-full max-w-sm">
      <SearchManufacturerDropdown
        manufacturer={manufacturer}
        setManuFacturer={setManuFacturer}
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition cursor-pointer"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
