// import TestOne from "./assets/component/TestOne";
// import TestTwo from "./assets/component/TestTwo";

import { useState } from "react";

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td> 
    </tr>
  );
};
const Statistics = ({ good, neutral, bad }) => {
  if (!(good || neutral || bad)) {
    return <p>no feed back</p>;
  }
  return (
    <table>
      <StatisticsLine text={"good"} value={good} />
      <StatisticsLine text={"neutral"} value={neutral} />
      <StatisticsLine text={"bad"} value={bad} />
      <StatisticsLine text={"All"} value={good + neutral + bad} />
      <StatisticsLine
        text={"average"}
        // value = `${(good - bad) / (good + neutral + bad)(good - bad) / (good + neutral + bad)}`
        value={(good - bad) / (good + neutral + bad)}
      />
      <StatisticsLine
        text={"positive"}
        value={(good * 100) / (good + neutral + bad) + " %"}
      />
    </table>
  );
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0);

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const goodClicks = () => {
    setGood(good + 1);
  };
  const neutralClicks = () => {
    setNeutral(neutral + 1);
  };
  const badClicks = () => {
    setBad(bad + 1);
  };

  const handleRanddome = () => {
    const randome = Math.floor(Math.random() * anecdotes.length);
    setSelected(randome);
    console.log(randome);
  };

  const officialVote = new Array(anecdotes.length).fill(0);
  // console.log(officialVote);
  const [votes, setVote] = useState(officialVote);
  const handleVote = () => {
    const newVote = [...votes];
    newVote[selected] += 1;
    setVote(newVote);
  };
  const maxVote = votes.indexOf(Math.max(...votes));
  return (
    <div>
      <h2>code here</h2>
      <Button text="good" handleClick={goodClicks} />
      <Button text="neutral" handleClick={neutralClicks} />
      <Button text="bad" handleClick={badClicks} />

      <div>
        <h2>statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
        <h3>Anecdote of the day</h3>
      </div>

      {anecdotes[selected]}
      <p>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleRanddome}>Next antidote</button>
      </p>

      <h4>has {votes[selected]} vote</h4>
      <h2>Anecdote with the most votes</h2>
      {votes[maxVote] === 0 ? (
        <p>no vote yet</p>
      ) : (
        <>
          {" "}
          <p> {anecdotes[maxVote]}</p> <p>has {votes[maxVote]} vote</p>
        </>
      )}
    </div>
  );
}

export default App;
