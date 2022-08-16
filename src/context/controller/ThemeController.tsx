import { useTheme } from "next-themes";
import React, { useEffect, useImperativeHandle } from "react";

export type ThemeType = "light" | "dark";
export interface ThemeControllerProps {
  onChange: (theme: ThemeType) => void;
}

export interface ThemeControllerRefProps {
  onToggleTheme: () => void;
}

export interface ThemeControllerRef {
  ref?: React.MutableRefObject<ThemeControllerRefProps | undefined>;
}

export function ThemeController(props: ThemeControllerProps & ThemeControllerRef) {
  const _ThemeController = React.forwardRef<
    ThemeControllerRefProps | undefined, ThemeControllerProps
  >(
    ({ onChange }, ref) => {
      const { theme, setTheme } = useTheme();
    
      const isDarkMode = theme === "dark";

      useImperativeHandle(ref, () => ({
        onToggleTheme: () =>  setTheme(isDarkMode? "light":"dark")
      }));

      useEffect(() => {
        onChange(theme as ThemeType);
      }, [onChange, theme]);

      return null;
    });
    
  _ThemeController.displayName = "_ThemeController";

  return (
    <_ThemeController
      {...props}
    />
  );
}