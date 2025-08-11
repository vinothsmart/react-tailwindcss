import { useState } from "React";
import Receipies from "./components/Receipies";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: [],
  });
  const [recipes, setRecipes] = useState([]);
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  const handleClose = () => {
    setShowAddRecipe((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addReceipe = () => {
    const newRecipe = {
      ...recipe,
      ingredients: recipe.ingredients
        .split(",")
        .map((ingredient) => ingredient.trim())
        .filter((ingredient) => ingredient.length > 0),
    };
    setRecipes((prev) => [...prev, newRecipe]);
    setShowAddRecipe(false);
  };

  return (
    <>
      <main>
        <h1 className="text-2xl font-bold mb-4">My Recipe Book</h1>
        <button onClick={handleClose}>Add Recipe</button>
        {showAddRecipe && (
          <AddRecipeForm handleChange={handleChange} addReceipe={addReceipe} />
        )}
        <Receipies recipes={recipes} />
      </main>
    </>
  );
}

export default App;
