import { Html } from "next/document";
import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  function getStoredCartItems() {
    if (typeof window !== "undefined") {
      const themeHere = localStorage.getItem("theme");
      if (themeHere !== null) {
        return themeHere;
      }
    } else {
      return "light";
    }
  }

  const [theme, setTheme] = useState(getStoredCartItems());

  useEffect(() => {
    const root = window.document.documentElement;

    const removeOldTheme = theme === "dark" ? "light" : "dark";

    root.classList.remove(removeOldTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
