import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function UseCallbackHook() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("yo, this is fun!");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );
  return (
    <div>
      <div>
        <h1 style={{ textDecoration: "underline " }}>UseCallbackHook()</h1>
      </div>
      <p style={{ textDecoration: "underline green wavy" }}>
        The useCallback and useMemo Hooks are similar. The main difference is
        that useMemo returns a memoized value and useCallback returns a memoized
        function.
      </p>
      <Child returnedComment={returnComment} />
      <div         style={{
          backgroundColor: "purple",
          margin: "12px",
          padding: "12px",
        }}>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {""}
          Toggle
        </button>
        {toggle && <h1>from child</h1>}
      </div>
    </div>
  );
}
