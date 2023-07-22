import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectHook = () => {
  const [data, setdata] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setdata(response.data[0].email);
        console.log("API was called!");
      });
  }, [count]);
  return (
    <div>
      <h1 style={{textDecoration:'underline'}}>UseEffectHook()</h1>
      <h3 style={{ textDecoration: "underline green wavy" }}>the useEffect Hook allows you to perform side effect,('useEffect...'),in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. This hook accepepts two arguements.</h3>
      <h3></h3>
      <div style={{backgroundColor:'magenta',margin:'12px',padding:'12px'}}>
      {data} {count}{" "}
      <button
        onClick={() => {
          setCount(count + 2);
        }}
        style={{
          background: "green",
          display: "block",
          marginTop: "20px",
          height: "20px",
          color: "white",
        }}
      >
        counter for reloading the page
      </button>
      </div>
    </div>
  );
};

export default UseEffectHook;
