"use client";

import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");

  const handleSearch = () => {};

  return (
    <form className="SearchBar" onSubmit={handleSearch}>
      <div className="searchbar__item"></div>
      <SearchManufacturer
        manufacturer={manufacturer}
        setManuFacturer={setManuFacturer}
      />
    </form>
  );
};

export default SearchBar;
