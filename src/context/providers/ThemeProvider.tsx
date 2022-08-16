import { ReactNode, startTransition, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

export type ThemeType = "light" | "dark";
export interface ThemeProviderProps {
  children: ReactNode;
}

export interface ThemeContext {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const themeContext = createContext<ThemeContext>({} as ThemeContext);

export function ThemeProvider({
  children
}:ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeType>("dark");

  const isDarkTheme = theme === "dark";

  function handleToggleTheme() {
    startTransition(() => {
      const currentTheme = isDarkTheme? "light":"dark";
      localStorage.setItem("theme", currentTheme);
      setTheme(currentTheme);
    });
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);

      if(theme === "dark" && document) {
        document.documentElement.classList.add("dark");
      } else if(document) {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

 
  return (
    <themeContext.Provider
      value={{
        isDarkTheme,
        toggleTheme: handleToggleTheme
      }}
    >
      {children}
    </themeContext.Provider>
  );
}