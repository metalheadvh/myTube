import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export default function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("light");

  const setCurrentTheme = (newTheme) => {
    setTheme(newTheme === "light" ? "light" : "dark");
  };

  return <ThemeContext.Provider value={{ theme, setCurrentTheme }}>{props.children}</ThemeContext.Provider>;
}
