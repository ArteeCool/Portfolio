import { createContext, useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export const BackgroundColorContext = createContext<string>("white");
export const TextColorContext = createContext<string>("black");
export const ThemeToggleContext = createContext<() => void>(() => {});

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prev) => !prev);
  }, []);

  const [backgroundColor, setBackgroundColor] = useState(
    isDarkTheme ? "#111111" : "white"
  );
  const [textColor, setTextColor] = useState(isDarkTheme ? "white" : "#111111");

  useEffect(() => {
    setBackgroundColor(isDarkTheme ? "#111111" : "white");
    setTextColor(isDarkTheme ? "white" : "#111111");
  }, [isDarkTheme]);

  useEffect(() => {
    document.body.style.background = backgroundColor;
    document.body.style.transition = "all 0.3s ease";
  }, [backgroundColor]);

  return (
    <ThemeToggleContext.Provider value={toggleTheme}>
      <BackgroundColorContext.Provider value={backgroundColor}>
        <TextColorContext.Provider value={textColor}>
          <Header />
          <Home />
          <Projects />
          <Contact />
        </TextColorContext.Provider>
      </BackgroundColorContext.Provider>
    </ThemeToggleContext.Provider>
  );
}

export default App;
