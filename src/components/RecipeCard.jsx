import React, { useEffect, useState, useContext } from "react";
import { SearchContext } from "../context/SearchContext";
// import dotenv from "dotenv";
// dotenv.config()
const RecipeCard = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const { query } = useContext(SearchContext);
  const fetchRecipe = async () => {
    // const apiKey = process.env.REACT_APP_API_KEY,
    //   apiId = process.env.REACT_APP_API_ID;
    //   console.log(apiKey)
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=9dbc2cc5&app_key=4ec3d14e625f80b8db09ca5e14926c7b`
      );
      const data = await res.json();
      setRecipes(data.hits);
    } catch (error) {
      setError(true);
      console.error(`error finding recipe : ${error}`);
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
        <p>loading recipe please wait...</p>
      ) : error ? (
        <p>error finding recipe, please try again</p>
      ) : (
        recipes && (
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
            ))}{" "}
          </div>
        )
      )}
    </>
  );
};

export default RecipeCard;
