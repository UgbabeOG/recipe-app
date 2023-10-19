import { createContext, useState } from "react";

export const SearchContext = createContext();

export default function ContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const [query, setQuery] = useState("");
  const getQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <SearchContext.Provider
      value={{ search, updateSearch, query, getQuery, setSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
}
