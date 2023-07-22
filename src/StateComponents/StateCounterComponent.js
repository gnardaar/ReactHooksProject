import React, { useState } from "react";

const StateCounterComponent = () => {
  const [counter, setCounter] = useState(420);
  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };
  const decrement = () => {
    setCounter((prevState) => prevState - 1);
  };
  return (
    <div>
      <h1>UseState (counter)</h1>
      <h3 style={{ textDecoration: "underline green wavy" }}>
        changes the state that a counter works off of.
      </h3>
      <p>
        state is saved whenever data is changed, this allows the virtual DOM to
        re-render the component instead of the whole webpage
      </p>
      <div
        style={{
          backgroundColor: "lightblue",
          margin: "12px",
          padding: "12px",
        }}
      >
        Counter: {counter}
        <button
          style={{
            background: "black",
            display: "block",
            marginTop: "20px",
            height: "20px",
            color: "white",
          }}
          onClick={increment}
        >
          increment
        </button>
        <button
          style={{
            background: "red",
            display: "block",
            marginTop: "20px",
            height: "20px",
            color: "white",
          }}
          onClick={decrement}
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default StateCounterComponent;
