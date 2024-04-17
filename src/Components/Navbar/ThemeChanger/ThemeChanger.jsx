import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/ThemeContextProvider";

export default function ThemeChanger() {
  const { setCurrentTheme } = useContext(ThemeContext);

  return (
    <>
      <button
        onClick={() => {
          setCurrentTheme("dark");
        }}
      >
        Dark Theme
      </button>
      <button
        onClick={() => {
          setCurrentTheme("light");
        }}
      >
        Light Theme
      </button>
    </>
  );
}
