import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

export default function UseMemoHook() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;
    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data, [data]));
  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>UseMemoHook()</h1>
      <p style={{ textDecoration: "underline green wavy" }}>
        {" "}
        this hook allows you to fetch data on render and do some calculations to
        find the longest names out of 500 names, thus using the UseMemoHook, your alowed to not re-calculate the algorithm every time you hit the button.
      
      </p>
      <p>doesn't re-render the algorithm</p>
      <div
        style={{
          backgroundColor: "lime",
          color: "black",
          padding: 12,
          margin: 12,
        }}
      >
        <div>{getLongestName}</div>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {""}
          Toggle
        </button>
        {toggle && <h1>toggle</h1>}
      </div>
    </div>
  );
}
