import React, { useState } from "react";

function RecipeCreate({ onRecipeCreate }) {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onRecipeCreate(recipe);
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };
  
  const handleTextareaResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };
  
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                value={recipe.name}
                onChange={handleChange}
                required
                placeholder="Name"
              />
            </td> 
            <td>
              <input
                type="text"
                name="cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
                required
                placeholder="Cuisine"
              />
            </td>
            <td>
              <input
                type="text"
                name="photo"
                value={recipe.photo}
                onChange={handleChange}
                required
                placeholder="URL"
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                required
                placeholder="Ingredients"
                onInput={handleTextareaResize}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                value={recipe.preparation}
                onChange={handleChange}
                required
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
           </tr>
        </thead>
      </table>
    </form>
  );
}

export default RecipeCreate;
