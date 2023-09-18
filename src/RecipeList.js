import React from "react";
import RecipeRow from "./RecipeRow";

function RecipeList({ recipes, onDelete }) {

  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* map recipes and display as RecipeRow*/}
          {recipes.map((recipe) => (
            <RecipeRow key={recipe.name} recipe={recipe} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
