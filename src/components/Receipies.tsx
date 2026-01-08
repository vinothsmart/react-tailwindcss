import { useId } from "react";
import Receipe from "./Receipe";

const Receipies = ({ recipes, handleRemoveRecipe }) => {
  const recipeID = useId();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <h1>My Recipes </h1>
      {recipes.map((recipe) => (
        <Receipe
          key={recipeID + recipe.title}
          title={recipe.title}
          ingredients={recipe.ingredients}
          handleRemoveRecipe={handleRemoveRecipe}
        />
      ))}
    </div>
  );
};
export default Receipies;
