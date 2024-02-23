import React, { useState } from "react";

const State = () => {
  const [color, setColor] = useState("red");

  const changeColor = () => {
    setColor(color === "red" ? "blue" : "red");
  };
  
  return (
    <div>
      <div>Using useState Example</div>
      <button style={{ backgroundColor: color }} onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default State;