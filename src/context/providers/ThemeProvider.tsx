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
      setTheme(isDarkTheme? "light":"dark");
    });
  }

  useEffect(() => {
    if(isDarkTheme && document) {
      document.documentElement.classList.add("dark");
    } else if(document) {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

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