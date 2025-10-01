import he from "he";
import NoData from "./NoData";

function Questions({ questions }) {
  if (questions.length === 0) {
    return <NoData />;
  }

  return (
    <div className="table-container">
      <table className="questions-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Difficulty</th>
            <th>Question</th>
            <th>Correct Answer</th>
            <th>Incorrect Answers</th>
          </tr>
        </thead>
        <tbody>
          {questions.map(
            ({
              category,
              difficulty,
              question,
              correct_answer,
              incorrect_answers,
            }) => (
              <tr key={question}>
                <td>{he.decode(category)}</td>
                <td className={`diff diff-${difficulty}`}>{difficulty}</td>
                <td className="question-cell">{he.decode(question)}</td>
                <td className="correct">{he.decode(correct_answer)}</td>
                <td>
                  <ul className="incorrect-list">
                    {incorrect_answers.map((ans) => (
                      <li key={ans}>{he.decode(ans)}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Questions;
