import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <>
      <div >
        <form className="p-5 flex justify-center gap-4" action="">
          <input
            className="placeholder:italic placeholder:text-slate-150  bg-slate-300 rounded px-3 py-1"
            placeholder="search for your recipe..."
            type="text"
          />
          <FaSearch className="my-2 text-3xl" />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
