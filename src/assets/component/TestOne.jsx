import React from "react";
const Header = (props) => {
  return <h1>{props.course}</h1>;
};
const Content = (props) => {
  return (
    <>
      <p>{props.parts[0].name}</p>
      <p>{props.parts[1].name}</p>
      <p>{props.parts[2].name}</p>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises are{" "}
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    </>
  );
};
const TestOne = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default TestOne;
