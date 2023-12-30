import { createContext, useState, useEffect, useContext } from "react";

export const SearchContext = createContext();

export default function ContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") || false
  );
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
    localStorage.setItem("darkMode", darkMode);
  };
  const getQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    // setSearch("");
  };

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
      setRecipes(data.hits);
    } catch (error) {
      setError(true);
      console.error(`error finding recipe : ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRecipe(query);
    return setSearch("");
  }, [query]);
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
        handleDarkMode,
        darkMode,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
export const useAuth = ()=> useContext(SearchContext)