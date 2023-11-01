import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchContext } from "../context/SearchContext";

const SearchBar = () => {
  const { getQuery, search, updateSearch } = useContext(SearchContext);

  return (
    <>
      <div>
        <form
          onSubmit={(e) => (search.length >= 1 ? getQuery(e) : null)}
          className="p-5 flex justify-center min-h-[10vh] w-full"
          action=""
        >
          <input
            className="w-2/5 px-3 py-1 rounded shadow  placeholder:italic placeholder:animate-pulse bg-slate-300 outline-[#F78B3A] dark:outline-[#FB9D4D]"
            placeholder="search for your recipe..."
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button
            disabled={search.length <= 0 ? true : false}
            type="submit"
            className="p-2 rounded active:bg-slate-300 bg-slate-200"
          >
            <FaSearch className="text-3xl text-[#F78B3A] dark:text-[#FB9D4D]" />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
