import { useContextSelector } from "use-context-selector";
import { themeContext } from "../providers/ThemeProvider";

export function useTheme() {
  return useContextSelector(themeContext, theme => ({
    toggleTheme: theme.toggleTheme,
    isDarkTheme: theme.isDarkTheme
  }));
}