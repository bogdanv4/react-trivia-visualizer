import { useEffect, useState } from "react";
import Questions from "./Questions";
import Categories from "./Categories";
import Difficulties from "./Difficulties";
import LoadingSpinner from "./LoadingSpinner";

function App() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  async function fetchQuestions() {
    setLoading(true);
    const response = await fetch("https://opentdb.com/api.php?amount=50");
    const data = await response.json();
    setQuestions(data.results);
    setLoading(false);
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
  <header className="header">
    <h1>Trivia Explorer</h1>
    <p className="subtitle">Filter questions by category & difficulty</p>
  </header>

  {loading ? (
    <LoadingSpinner />
  ) : (
    <>
      <div className="filters">
        <Categories
          questions={questions}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Difficulties
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
        />
      </div>

      <div className="questions">
        <h2 className="section-title">Questions</h2>
        <Questions questions={filteredQuestions} />
      </div>
    </>
  )}
</>
  );
}

export default App;
