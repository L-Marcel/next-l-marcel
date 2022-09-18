
import { useTheme } from "../../../context/hooks/useTheme";
import { Icon } from "../../Icon";
import { MobileToggleThemeIconButton } from "./styles";

export function MobileToggleThemeButton() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <MobileToggleThemeIconButton
      onClick={toggleTheme} 
    >
      <Icon 
        className="!text-[1.5rem] duration-100" 
        name={isDarkTheme? "moon":"sun"}
        title={isDarkTheme? "toggle to light theme":"toggle to dark theme"}
        withoutTooltip
      />
    </MobileToggleThemeIconButton>
  );
}