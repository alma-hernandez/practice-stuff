import React, { useContext } from "react";
import { ThemeContext } from "./Context"; 

const HeaderContext = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); 

  return (
    <header style={{ background: theme === "light" ? "blue" : "light" }}>
      <h1>Theme Switching</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default HeaderContext;