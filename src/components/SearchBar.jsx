import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-md p-10">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="Search"
          placeholder="Search for..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full rounded-md border-blue-200 py-2.5 pe-10 shadow-sm sm:text-sm"
        />
        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button
            type="button"
            onClick={handleSearchSubmit}
            className="text-gray-600 hover:text-gray-700"
          >
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
