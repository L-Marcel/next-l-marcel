
import { useRouter } from "next/router";
import { useTheme } from "../../context/hooks/useTheme";
import { IconButton } from "./IconButton";

export function ToggleThemeButton() {
  const router = useRouter();
  const { isDarkTheme, toggleTheme } = useTheme();

  const isNotPtBr = router.locale === "en-us";

  return (
    <IconButton
      className="!pl-[10px]"
      onClick={toggleTheme} 
      icon={isDarkTheme? "moon":"sun"}
      title={isDarkTheme? 
        isNotPtBr? "toggle to light theme":"trocar para tema claro":
        isNotPtBr? "toggle to dark theme":"trocar para tema escuro"}
    />
  );
}