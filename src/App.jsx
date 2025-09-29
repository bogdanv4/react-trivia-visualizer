import { useEffect, useState } from "react";
import Questions from "./Questions";
import Categories from "./Categories";
import Dificulties from "./Dificulties";

function App() {
  const [questions, setQuestions] = useState([]);

  async function fetchQuestions() {
    const response = await fetch("https://opentdb.com/api.php?amount=50");
    const data = await response.json();
    setQuestions(data.results);
  }
  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <>
      <h1>Welcome</h1>
      <h2>Questions</h2>
      <Questions questions={questions} />
      <hr />
      <h2>Categories</h2>
      <Categories questions={questions} />
      <h2>Dificulties</h2>
      <Dificulties questions={questions} />
    </>
  );
}

export default App;
