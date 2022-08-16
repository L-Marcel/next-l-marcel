
import { useTheme } from "../../context/hooks/useTheme";
import { IconButton } from "./IconButton";

export function ToggleThemeButton() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <IconButton
      className="!pl-[10px]"
      onClick={toggleTheme} 
      icon={isDarkTheme? "moon":"sun"}
      title={isDarkTheme? "toggle to light theme":"toggle to dark theme"}
    />
  );
}