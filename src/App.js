import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  
  //delete a recipe
  const handleDelete = (recipeName) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.name !== recipeName);
    setRecipes(updatedRecipes);
  };

  //create new recipe
  const handleCreate = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };
  
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      {/* display recipes */}
      <RecipeList recipes={recipes} onDelete={handleDelete} />
      {/* create recipe */}
      <RecipeCreate onRecipeCreate={handleCreate} />
    </div>
  );
}

export default App;
