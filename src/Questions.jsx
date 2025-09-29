import he from "he";

function Questions({ questions }) {
  return (
    <>
      <ul className="questions">
        {questions.map(({ question }) => (
          <li key={question}>{he.decode(question)}</li>
        ))}
      </ul>
    </>
  );
}

export default Questions;
