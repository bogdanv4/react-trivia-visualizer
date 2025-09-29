import { useEffect, useState } from "react";
import Questions from "./Questions";
import Categories from "./Categories";
import Difficulties from "./Difficulties";

function App() {
  const [questions, setQuestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  async function fetchQuestions() {
    const response = await fetch("https://opentdb.com/api.php?amount=50");
    const data = await response.json();
    setQuestions(data.results);
  }
  useEffect(() => {
    fetchQuestions();
  }, []);

  const filteredQuestions = questions.filter((question) => {
    const matchCategory =
      selectedCategory === "All" || question.category === selectedCategory;
    const matchDifficulty =
      selectedDifficulty === "All" ||
      question.difficulty === selectedDifficulty;
    return matchCategory && matchDifficulty;
  });

  return (
    <>
      <h1 className="heading">Welcome</h1>
      <div className="row">
        <div className="categories">
          <h2 className="heading">Categories</h2>
          <Categories
            questions={questions}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="difficulties">
          <h2 className="heading">Dificulties</h2>
          <Difficulties
            selectedDifficulty={selectedDifficulty}
            setSelectedDifficulty={setSelectedDifficulty}
          />
        </div>
      </div>
      <hr />
      <div className="questions">
        <h2 className="heading">Questions</h2>
        <Questions questions={filteredQuestions} />
      </div>
    </>
  );
}

export default App;
