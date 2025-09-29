import he from "he";
import NoData from "./NoData";

function Questions({ questions }) {
  if (questions.length === 0) {
    return <NoData />;
  }

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
