import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function ContextTutorial() {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <AppContext.Provider value={{ userName, setUserName }}>
        <div style={{textDecoration:"underline"}}>
          <h1>useContext()</h1></div>
          <h3>
            the useContext allows you to access context inside a child component
            in order to use is in the parent
          </h3>
          <p style={{ textDecoration: "underline green wavy" }}>
            {" "}
            this was used here as two way data binding with a parent and a child
            component
          </p>
        <div style={{backgroundColor:'black',color:"white",padding:12,margin:12}}>
        <Login /> <User /></div>
      </AppContext.Provider>
    </div>
  );
}
export default ContextTutorial;
