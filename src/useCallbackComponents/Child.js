import React, { useEffect } from "react";

export default function Child({ returnComment }) {
  useEffect(() => {
    console.log("Child component rendered and function was called");
  }, [returnComment]);
  return <div>{returnComment}</div>;
}
