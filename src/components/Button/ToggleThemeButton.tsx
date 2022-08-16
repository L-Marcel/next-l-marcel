import { useTheme } from "next-themes";
import { IconButton } from "./IconButton";

export function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();
  
  const isDarkMode = theme === "dark";

  function handleToggleTheme() {
    setTheme(isDarkMode? "light":"dark");
  }

  return (
    <IconButton
      className="!pl-[10px]"
      onClick={handleToggleTheme} 
      icon={isDarkMode? "moon":"sun"}
      title={isDarkMode? "toggle to light theme":"toggle to dark theme"}
    />
  );
}