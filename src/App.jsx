import { useState } from "React";
import Receipies from "./components/Receipies";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  const handleClose = () => {
    setShowAddRecipe((prev) => !prev);
  };

  return (
    <>
      <main>
        <h1 className="text-2xl font-bold mb-4">My Recipe Book</h1>
        <button onClick={handleClose}>Add Recipe</button>
        {showAddRecipe && <AddRecipeForm onClose={handleClose} />}
        <Receipies />
      </main>
    </>
  );
}

export default App;
