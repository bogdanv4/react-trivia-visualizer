import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import he from "he";

function Statistics({ questions }) {
  const categoriesCount = questions.reduce((acc, q) => {
    acc[q.category] = (acc[q.category] || 0) + 1;
    return acc;
  }, {});
  const difficultiesCount = questions.reduce((acc, q) => {
    acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
    return acc;
  }, {});
  const typesCount = questions.reduce((acc, q) => {
    acc[q.type] = (acc[q.type] || 0) + 1;
    return acc;
  }, {});

  const categoryData = Object.entries(categoriesCount).map(([name, value]) => ({
    name: he.decode(name),
    value,
  }));
  const difficultyData = Object.entries(difficultiesCount).map(
    ([name, value]) => ({ name, value })
  );
  const typeData = Object.entries(typesCount).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = ["#82aaff", "#c792ea", "#f7768e", "#c3e88d", "#ffcb6b"];

  console.log(categoryData);

  return (
    <>
      <h2 className="section-title">Statistics</h2>
      <div className="charts-container">
        <div className="chart-box">
          <h3>Questions by Difficulty</h3>
          <ResponsiveContainer height={300} width="100%">
            <PieChart>
              <Pie
                data={difficultyData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
              >
                {difficultyData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Questions per Category</h3>
          <ResponsiveContainer height={300} width="100%">
            <BarChart data={categoryData} margin={{ left: -35 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" hide />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82aaff" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Questions by Type</h3>
          <ResponsiveContainer height={300} width="100%">
            <PieChart>
              <Pie
                data={typeData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
              >
                {typeData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default Statistics;
