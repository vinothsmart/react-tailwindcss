import Receipe from "./Receipe";

const RECIPE_EXAMPLES = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "eggs", "cheese", "pancetta", "pepper"],
  },
  {
    id: 2,
    title: "Chicken Curry",
    ingredients: ["chicken", "curry powder", "coconut milk", "onion"],
  },
];

const Receipies = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {RECIPE_EXAMPLES.map((recipe) => (
        <Receipe key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};
export default Receipies;
