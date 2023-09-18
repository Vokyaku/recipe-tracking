import React from "react";

function RecipeRow({ recipe, onDelete }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt={recipe.name} />
      </td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        <button name="delete" onClick={() => onDelete(recipe.name)}>
  Delete
</button>
      </td>
    </tr>
  );
}

export default RecipeRow;