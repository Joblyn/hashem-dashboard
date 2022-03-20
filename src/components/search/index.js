import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

export default function Search() {
  return (
    <div className="h-full w-44 md:w-64 lg:80 p-2 md:p-3 flex flex-row items-center bg-gray-300">
      <span className="sr-only">Search</span>
      <SearchIcon className="align-middle w-4 h-4 " />
      <input
        type="text"
        className="bg-[transparent] text-xs md:text-sm target:bg-[tranparent] focus-visible:outline-none 
        placeholder:text-black placeholder:text-opacity-20 px-2 w-full block border-none pr-3 "
        name="search"
        id="search"
        placeholder="Search here..."
      />
    </div>
  );
}
