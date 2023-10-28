import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchContext } from "../context/SearchContext";

const SearchBar = () => {
  const { getQuery, search, updateSearch } = useContext(SearchContext);

  return (
    <>
      <div>
        <form
          onSubmit={(e) =>
            search.length > 0
              ? getQuery(e)
              : alert("enter search term in search bar") && e.preventDefault()
          }
          className="p-5 flex justify-center min-h-[10vh] w-full"
          action=""
        >
          <input
            className="w-2/5 px-3 py-1 rounded shadow appearance-none placeholder:italic placeholder:text-slate-150 bg-slate-300 outline-sky-950"
            placeholder="search for your recipe..."
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button type="submit" className="p-2 rounded bg-sky-950">
            <FaSearch className="text-3xl text-slate-300" />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
