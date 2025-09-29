import he from "he";

function Dificulties({ questions }) {
  const dificulties = questions.map(({ difficulty }) => difficulty);
  const uniqueDificulties = [...new Set(dificulties)];
  return (
    <>
      <ul className="questions">
        {uniqueDificulties.map((dificulty) => (
          <li key={dificulty}>{he.decode(dificulty)}</li>
        ))}
      </ul>
    </>
  );
}

export default Dificulties;
