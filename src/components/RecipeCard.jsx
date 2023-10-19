import React, { useEffect, useState } from "react";

const RecipeCard = () => {
  const [recipes, setRecipes]  = useState([]);
  //   const apiId = process.env.API_ID;
  //   const apiKey = process.env.API_KEY;
  const fetchRecipe = async () => {
    try {
      const res = await fetch(
        `https://api.edamam.com/search?q=chicken&app_id=9dbc2cc5&app_key=4ec3d14e625f80b8db09ca5e14926c7b

        `
      );
      const data = await res.json();
      setRecipes(data.hits);
      console.log(data.hits)
    } catch (error) {
      console.error(`error finding recipe : ${error}`);
    }
  };
  useEffect(() => {
    fetchRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      {recipes.map(recipe=>(<div>
        <img src={recipe.recipe.image} alt="" />
        <h3>{recipe.recipe.label}</h3>
        <p>{recipe.recipe.calories}</p>
      </div>))}
    </div>
  );
};

export default RecipeCard;
