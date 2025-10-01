function Difficulties({ selectedDifficulty, setSelectedDifficulty }) {
  return (
    <form>
      <select
         className="select-control"
        value={selectedDifficulty}
        onChange={(event) => setSelectedDifficulty(event.target.value)}
      >
        <option value="All">All</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </form>
  );
}

export default Difficulties;
