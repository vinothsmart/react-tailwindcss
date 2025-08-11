const Receipe = ({ title, ingredients }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2>{title}</h2>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};
export default Receipe;
