import { createContext, useState, useEffect } from "react";

export const ThemeData = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeData.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeData.Provider>
  );
};

export default ThemeContext;
