import React, { useState } from "react";

const UseStateBasics = () => {
  const [value, setValue] = useState("hello");
  const clickHandler = () => {
    if (value === "hello") {
      setValue("bye")
    }
    else {
      setValue("hello")
    }
  };
  return (
    <React.Fragment>
      <h2>{value}</h2>
      <button className="btn" onClick={clickHandler}>click me</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
