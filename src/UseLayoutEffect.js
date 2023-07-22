import React, { useLayoutEffect, useEffect, useRef } from "react";

const UseLayoutEffect = () => {
  const inputRef = useRef(null);

  // uselayoutEffect reders to the screen before the UseEffect hook.
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "hello";
  });
  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>
        useLayoutEffect()
      </h1>
      <h3>useLayoutEffect runs synchronously, as opposed to useEffect</h3>
      <p style={{ textDecoration: "underline green wavy" }}>this allow on rendering to start with "hello" in the text box, and then when you type anything in it, makes the text change synchronously  </p>
      <div
        style={{
          backgroundColor: "lightgreen",
          margin: "12px",
          padding: "12px",
        }}
      >
        <input
          ref={inputRef}
          value={"andy"}
          style={{
            width: "400px",
            marginTop: "30px",
            borderBlockColor: "orange",
            backgroundColor: "yellowgreen",
          }}
        />
      </div>
    </div>
  );
};

export default UseLayoutEffect;
