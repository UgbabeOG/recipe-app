import React, { useEffect, useState, useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const RecipeCard = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const { query } = useContext(SearchContext);
  const fetchRecipe = async () => {
    const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
    const apiId = process.env.REACT_APP_API_ID;
    const apiKey = process.env.REACT_APP_API_KEY;
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
    fetchRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="custom-loader block"></div>
          <p>searching for recipe please wait...</p>
        </div>
      ) : error ? (
        <p>error finding recipe, please try again</p>
      ) : (
        recipes && (
          <div className="container mx-auto py-20 max-w-[960px] px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 p-4 bg-slate-200">
              {recipes.map((recipe) => (
                <div
                  key={recipe.recipe.label}
                  className="shadow-lg rounded-md p-2"
                >
                  <img
                    className="rounded-md p-2 object-cover"
                    src={recipe.recipe.image}
                    alt={recipe.recipe.label}
                  />
                  <h3 className="font-bold">{recipe.recipe.label}</h3>
                  <p>Calories: {recipe.recipe.calories}</p>{" "}
                  <ol>
                    {" "}
                    <p>ingredients below</p>
                    {recipe.recipe.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient.text}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        )
      )}
      {recipes && recipes.length === 0 ? (
        <p>No recipes found for your search.</p>
      ) : null}
    </>
  );
};

export default RecipeCard;
