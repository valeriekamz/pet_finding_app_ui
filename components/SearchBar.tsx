"use client";

import { useState } from "react";
import SearchBreed from "./SearchBreed";
import SearchCity from "./SearchCity";
import Image from "next/image";

const SearchBar = () => {
  const [breed, setBreed] = useState('');
  const [city, setCity] = useState('');

  const handleSearch = () => {
    // Logic to handle search
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative gap-4">
        {/* Breed Search */}
        <SearchBreed breed={breed} setBreed={setBreed} />

        {/* City Search */}
        <SearchCity city={city} setCity={setCity} />

        <button type="submit" className="search-button bg-gray-200 p-4 rounded-full mr-4">
          <Image
            src="/search.svg" 
            width={20}
            height={20}
            alt="Search"
          />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
