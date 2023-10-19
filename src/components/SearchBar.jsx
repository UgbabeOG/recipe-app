import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchContext } from "../context/SearchContext";

const SearchBar = () => {
  const { getQuery, search, updateSearch } = useContext(SearchContext);

  return (
    <>
      <div>
        <form
          onSubmit={getQuery}
          className="p-5 flex justify-center gap-4 min-h-[10vh]"
          action=""
        >
          <input
            className="placeholder:italic placeholder:text-slate-150 w-2/5  bg-slate-300 rounded px-3 py-1"
            placeholder="search for your recipe..."
            type="text"
            value={search}
            onChange={updateSearch}
          />{" "}
          <button>
            <FaSearch className="my-2 text-3xl text-sky-600" />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
