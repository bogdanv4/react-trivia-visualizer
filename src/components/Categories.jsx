import he from "he";

function Categories({ questions, selectedCategory, setSelectedCategory }) {
  const categories = questions.map(({ category }) => category);
  const uniqueCategories = ["All", ...new Set(categories)].sort();

  return (
    <form>
      <select
        className="select-control"
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        {uniqueCategories.map((category) => (
          <option key={category} value={category}>
            {he.decode(category)}
          </option>
        ))}
      </select>
    </form>
  );
}

export default Categories;
