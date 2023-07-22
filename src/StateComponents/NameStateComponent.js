import React, { useState } from "react";

const NameStateComponent = () => {
  const [inputValue, setInputValue] = useState("Abraham");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <div>
        <h1 style={{textDecoration:"underline"}} >useState (Name)</h1>
          {" "}
        <h3 style={{ textDecoration: "underline green wavy" }}>
          this is name state and Dynamically changes.
        </h3>
      </div>
      <div
        style={{
          backgroundColor: "lightpink",
          margin: "12px",
          padding: "12px",
        }}
      >
        <input
          onChange={onChange}
          style={{ marginTop: "20px" }}
          placeholder="enter in somthing"
        />
        {inputValue}
        {" Abraham"}
      </div>
    </div>
  );
};

export default NameStateComponent;
