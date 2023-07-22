import React, { useRef } from "react";

const UseRefHook = () => {
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>
        UseRefHook().
      </h1>
      <h3>in this example, when you click the button "change name" then the referance will automatically change the ref to the targe</h3>
      <p style={{ textDecoration: "underline green wavy" }} >this will allow you to get quickly to the input field very good UX design!</p>
      <div
        style={{ backgroundColor: "yellow", margin: "12px", padding: "12px" }}
      >
        <h1>andy</h1>
        <input ref={inputRef} />
        <button onClick={onClick}>change name</button>
      </div>
    </div>
  );
};

export default UseRefHook;
