import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Feedback = ({ type, score }) => (
  <tr>
    <td>{type}</td>
    <td>{score}</td>
  </tr>
);

const Heading = ({ text }) => <h1>{text}</h1>;

const StatisticLine = ({ title, score }) => (
  <tr>
    <td>{title}</td>
    <td>{score}</td>
  </tr>
);

const Statistics = ({ all, statistics }) => {
  if (all > 0) {
    return (
      <>
        {statistics.map((statistic, index) => (
          <StatisticLine
            key={index}
            title={statistic.title}
            score={statistic.score}
          />
        ))}
      </>
    );
  }
  return (
    <tr>
      <th>No feedback given</th>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [averageScore, setAverageScore] = useState(0);
  const statistics = [
    {
      title: "All",
      score: all,
    },
    {
      title: "Average",
      score: averageScore / all,
    },
    {
      title: "Positive",
      score: `${(good / all) * 100}%`,
    },
  ];

  const increaseGood = () => {
    setGood(good + 1);
    setAll(all + 1);
    setAverageScore(averageScore + 1);
  };
  const increaseNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  const increaseBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setAverageScore(averageScore - 1);
  };

  return (
    <div>
      <Heading text={"Give Feedback"} />
      <Button onClick={increaseGood} text={"good"} />
      <Button onClick={increaseNeutral} text={"neutral"} />
      <Button onClick={increaseBad} text={"bad"} />
      <Heading text={"Statistics"} />
      <table>
        <tbody>
          <Feedback type={"Good"} score={good} />
          <Feedback type={"Neutral"} score={neutral} />
          <Feedback type={"Bad"} score={bad} />
          <Statistics statistics={statistics} all={all} />
        </tbody>
      </table>
    </div>
  );
};

export default App;
