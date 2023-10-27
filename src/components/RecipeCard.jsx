import React, {  useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const RecipeCard = () => {
  const { recipes, error, loading   } =
    useContext(SearchContext);

  // useEffect(() => {
  //   fetchRecipe();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [query]);
  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <div className="block custom-loader"></div>
          <p className="p-5 text-3xl">searching for recipe please wait...</p>
        </div>
      ) : error ? (
        <p>Network error, please try again</p>
      ) : recipes && recipes.length === 0 ? (
        <p className="w-[50%] m-auto p-5 text-sm text-center text-slate-500">
          Enter what you have eaten, like "coffee and croissant" or "chicken
          enchilada" to see how it works. We have accurate data tens of
          thousands of foods, including international dishes.
        </p>
      ) : (
        recipes && (
          <div className="container max-w-full px-5 py-10 mx-auto bg-slate-200">
            <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 place-items-center bg-slate-300">
              {recipes.map((recipe) => (
                <div
                  key={recipe.recipe.label}
                  className="max-w-lg rounded-md shadow-xl min-w-fit "
                >
                  <div className="flex gap-8 p-3 m-2 ">
                    <img
                      className="object-contain w-40 rounded-md "
                      src={recipe.recipe.image}
                      alt={recipe.recipe.label}
                    />{" "}
                    <div className="flex flex-col">
                      <h3 className="p-2 font-bold ">{recipe.recipe.label}</h3>
                      <p className="">
                        {recipe.recipe.dietLabels}
                        {recipe.recipe.cuisineType} cuisine
                      </p>
                      <p>Calories: {Math.floor(recipe.recipe.calories)}</p>{" "}
                      <p>{recipe.recipe.healthLabels}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-400">
                    <ol>
                      <p className="font-medium">Ingredients </p>
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
