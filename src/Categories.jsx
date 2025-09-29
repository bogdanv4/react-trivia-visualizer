import he from "he";

function Categories({ questions }) {
  const categories = questions.map(({ category }) => category);
  const uniqueCategories = [...new Set(categories)];
  return (
    <>
      <ul className="questions">
        {uniqueCategories.map((category) => (
          <li key={category}>{he.decode(category)}</li>
        ))}
      </ul>
    </>
  );
}

export default Categories;
