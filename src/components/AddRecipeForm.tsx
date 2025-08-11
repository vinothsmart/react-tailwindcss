const AddRecipeForm = ({ handleChange, addReceipe }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <h1>Add Receipe</h1>
      <input
        type="text"
        placeholder="Title"
        name="title"
        className="border p-2 rounded"
        onChange={handleChange}
      />
      <br />
      <textarea
        placeholder="Ingredients"
        name="ingredients"
        className="border p-2 rounded"
        onChange={handleChange}
      />
      <br />
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={addReceipe}
      >
        Add Recipe
      </button>
    </div>
  );
};
export default AddRecipeForm;
