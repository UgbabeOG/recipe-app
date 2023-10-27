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
          className="p-5 flex justify-center gap-4 min-h-[10vh] w-full"
          action=""
        >
          <input
            className="w-2/5 px-3 py-1 rounded placeholder:italic placeholder:text-slate-150 bg-slate-300"
            placeholder="search for your recipe..."
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button type="submit">
            <FaSearch className="my-2 text-3xl text-sky-600" />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
