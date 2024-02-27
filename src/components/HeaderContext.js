import React, { useState, createContext, useContext } from "react";
const ThemeContext = createContext(null);

const Context = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <HeaderContext/>
    </ThemeContext.Provider>
  );
};

const HeaderContext = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); 

  return (
    <header style={{ background: theme === "light" ? "blue" : "Red" }}>
      <h1>Theme Switching</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Context;