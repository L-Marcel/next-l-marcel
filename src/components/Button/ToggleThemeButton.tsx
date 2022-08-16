import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { ThemeControllerProps, ThemeControllerRef, ThemeControllerRefProps, ThemeType } from "../../context/controller/ThemeController";
import { IconButton } from "./IconButton";

const ThemeController = dynamic<ThemeControllerProps & ThemeControllerRef>(
  () => import("../../context/controller/ThemeController").then(mod => mod.ThemeController),
  {
    ssr: false,
  }
);

export function ToggleThemeButton() {
  const ref = useRef<ThemeControllerRefProps>();
  const [theme, setTheme] = useState<ThemeType>("dark");

  const isDarkMode = theme === "dark";

  return (
    <>
      <ThemeController
        ref={ref}
        onChange={(theme) => setTheme(theme)}
      />
      <IconButton
        className="!pl-[10px]"
        onClick={() => ref?.current?.onToggleTheme} 
        icon={isDarkMode? "moon":"sun"}
        title={isDarkMode? "toggle to light theme":"toggle to dark theme"}
      />
    </>
  );
}