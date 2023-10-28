import { createContext, useState, useEffect } from "react";

export const SearchContext = createContext();

export default function ContextProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const getQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  useEffect(() => {
    fetchRecipe(query);
  }, [query]);
  const fetchRecipe = async (query) => {
    const apiEndpoint = process.env.REACT_APP_API_ENDPOINT,
      apiId = process.env.REACT_APP_API_ID,
      apiKey = process.env.REACT_APP_API_KEY;
    setLoading(true);
    try {
      const res = await fetch(
        `${apiEndpoint}?q=${query}&app_id=${apiId}&app_key=${apiKey}`
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch data: HTTP status ${res.status}`);
      }
      const data = await res.json();
      console.log(data.hits);
      setRecipes(data.hits);
    } catch (error) {
      setError(true);
      console.error(`error finding recipe : ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <SearchContext.Provider
      value={{
        recipes,
        error,
        loading,
        search,
        updateSearch,
        query,
        getQuery,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
