import { createContext, useState } from "react";

const themeContext = createContext();
const ModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const handleMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };
  const modeInfo = {
    darkMode,
    setDarkMode,
    handleMode,
  };
  return (
    <themeContext.Provider value={modeInfo}>{children}</themeContext.Provider>
  );
};

export { ModeProvider, themeContext };
