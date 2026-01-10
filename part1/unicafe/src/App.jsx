import { useState } from "react";

const Heading = ({ text }) => <h1>{text}</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Feedback = ({ type, score }) => (
  <p>
    {type}: {score}
  </p>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [averageScore, setAverageScore] = useState(0);

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
      <Feedback type={"Good"} score={good} />
      <Feedback type={"Neutral"} score={neutral} />
      <Feedback type={"Bad"} score={bad} />
      <Feedback type={"All"} score={all} />
      <Feedback type={"Average"} score={averageScore / all} />
      <p>Positive: {(good / all) * 100}%</p>
    </div>
  );
};

export default App;
