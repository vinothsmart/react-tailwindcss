import { useId } from "React";
const Receipe = ({ title, ingredients, handleRemoveRecipe }) => {
  const ingredientsID = useId();
  return (
    <div className="border p-4 rounded shadow">
      <h2>
        {title} <button onClick={handleRemoveRecipe(title)}> Remove </button>
      </h2>
      <h3>Ingredients</h3>
      <ul>
        {ingredients?.map((ingredient) => (
          <li key={ingredientsID + ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};
export default Receipe;
