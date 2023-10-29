/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const RecipeCard = () => {
  const { recipes, error, loading } = useContext(SearchContext);

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <div className="block custom-loader"></div>
          <p className="p-5 md:text-3xl">searching for recipe please wait...</p>
        </div>
      ) : error ? (
        <p className="m-auto text-lg text-center text-slate-600">
          Network error, please try again.
        </p>
      ) : recipes.length === 0 ? (
        <p className="w-[60%] m-auto p-5 text-sm text-center text-slate-500">
          No results found for keyword entered, please try again.
        </p>
      ) : (
        recipes && (
          <div className="container max-w-full px-5 py-10 mx-auto bg-[#73BD46] dark:bg-[#93C25A]">
            <div className="grid grid-cols-1 gap-4 p-4 mb-5 sm:grid-cols-2 place-items-center bg-slate-300">
              {recipes.map((recipe) => (
                <div
                  key={recipe.recipe.label}
                  className="container max-w-sm mb-5 rounded-md shadow-2xl md:max-w-lg "
                >
                  <div className="flex flex-col gap-4 p-4 lg:flex-row ">
                    <img
                      className="object-cover w-full h-40 rounded"
                      src={recipe.recipe.image}
                      alt={recipe.recipe.label}
                    />{" "}
                    <div className="flex flex-col ">
                      <h3 className="p-2 text-lg font-bold">
                        {recipe.recipe.label}
                      </h3>
                      <p className="text-[.85rem] sm:text-sm text-slate-600 leading-snug tracking-tight sm:leading-loose">
                        This is a{" "}
                        <span className="font-medium uppercase text-sky-900 dark:text-slate-50">
                          {recipe.recipe.cuisineType}{" "}
                        </span>{" "}
                        cuisine {recipe.recipe.dietLabels}
                      </p>
                      <p className="text-[.85rem] sm:text-sm text-slate-600 leading-snug tracking-tight sm:leading-loose">
                        Calories: {Math.floor(recipe.recipe.calories)}
                      </p>{" "}
                      <ol className="max-w-sm  text-[.65rem] sm:text-sm text-slate-500 leading-snug tracking-tight sm:leading-loose flex flex-wrap py-2 gap-x-2 list-inside list-disc ">
                        {recipe.recipe.healthLabels
                          .slice(0, 12)
                          .map((healthLabel) => (
                            <li>{healthLabel}</li>
                          ))}{" "}
                      </ol>
                    </div>
                  </div>
                  <div className="p-4 rounded-b bg-slate-500">
                    <p className="font-medium">Ingredients </p>

                    <ol>
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
