import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducerHook = () => {
  // const [count,setCount] = useState(0)
  // const [showText,setShowText] = useState(true)
  //   insead of using state like this you can manage state in different ways!
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>
        UseReducerHook
      </h1>
      <h3 style={{ textDecoration: "underline green wavy" }}> The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object. The useReducer Hook returns the current state</h3>
      <div
        style={{
          backgroundColor: "lightgrey",
          margin: "12px",
          padding: "12px",
        }}
      >
        <h1>{state.count}</h1>
        <button
          style={{
            background: "black",
            display: "block",
            marginTop: "10px",
            height: "20px",
            color: "white",
          }}
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "toggleShowText" });
          }}
        >
          click here!
        </button>
        {state.showText && <p>this is text</p>}
      </div>
    </div>
  );
};

export default UseReducerHook;
