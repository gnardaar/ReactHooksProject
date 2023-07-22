import React, { useRef } from "react";
import Button from "./Button";

function ImperitaveHandle() {
  const buttonRef = useRef(null);
  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>useImperativeHook</h1>
      <p style={{ textDecoration: "underline green wavy" }}>
        allows you to manipulate the button from the parent to the child{" "}
        <b>(parent => child)</b>
      </p>
      <div
        style={{ backgroundColor: "orange", margin: "12px", padding: "12px" }}
      >
        <button
          onClick={() => {
            buttonRef.current.alterToggle();
          }}
        >
          button from parent
        </button>
        <Button ref={buttonRef} />
      </div>
    </div>
  );
}

export default ImperitaveHandle;
