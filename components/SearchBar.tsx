"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [manufacturer, setManuFacturer] = useState(
    searchParams.get("manufacturer") || ""
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (manufacturer) {
      params.set("manufacturer", manufacturer);
    } else {
      params.delete("manufacturer");
    }

    router.push(`/?${params.toString()}`, { scroll: false });
  }, [manufacturer]);

  return (
    <div className="SearchBar">
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </div>
  );
};

export default SearchBar;
