import he from "he";
import NoData from "./NoData";

function Questions({ questions }) {
  if (questions.length === 0) {
    return <NoData />;
  }

  return (
    <>
      <ul className="questions-list">
        {questions.map(({ question }) => (
          <li key={question} className="question-item">
            {he.decode(question)}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Questions;
