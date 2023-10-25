import React, { useEffect, useState, useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const RecipeCard = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { query } = useContext(SearchContext);
  const fetchRecipe = async () => {
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
    fetchRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    <>
      {loading ? (
        <div className="flex flex-col justify-center items-center">
          <div className="custom-loader block"></div>
          <p className="p-5 text-3xl">searching for recipe please wait...</p>
        </div>
      ) : error ? (
        <p>Network error, please try again</p>
      ) : recipes && recipes.length === 0 ? (
        <p className="p-5 text-3xl text-center">
          Enter food name in search bar to find your ingredients.
        </p>
      ) : (
        recipes && (
          <div className="container mx-auto py-20 max-w-[960px] px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 p-4 bg-slate-200">
              {recipes.map((recipe) => (
                <div
                  key={recipe.recipe.label}
                  className="shadow-lg rounded-md p-2  "
                >
                  <div className="container p-3 m-2 relative flex gap-4 overflow-clip">
                    <img
                      className="rounded-md  object-contain "
                      src={recipe.recipe.image}
                      alt={recipe.recipe.label}
                    />
                    <h3 className="font-bold absolute bottom-3 left-3 p-2 ">
                      {recipe.recipe.label}
                    </h3>{" "}
                    <div className="flex flex-col">
                      <p className="">
                        {recipe.recipe.dietLabels}
                        {recipe.recipe.cuisineType} cuisine
                      </p>
                      <p>Calories: {Math.floor(recipe.recipe.calories)}</p>{" "}
                      <p>{recipe.recipe.healthLabels}</p>
                    </div>
                  </div>
                  <div className="box">
                    <ol>
                      <p className="font-bold">Ingredients below</p>
                      {recipe.recipe.ingredients.map((ingredient, i) => (
                        <li key={i}>{ingredient.text}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </>
  );
};

export default RecipeCard;
