import { ReactNode, startTransition, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

export interface MenuProviderProps {
  children: ReactNode;
}

export interface MenuContext {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const menuContext = createContext<MenuContext>({} as MenuContext);

export function MenuProvider({ 
  children 
}: MenuProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = useCallback(() => {
    startTransition(() => {
      setIsOpen(isOpen => !isOpen);
    });
  }, [setIsOpen]);

  useEffect(() => {
    window.onresize = () => {
      if(document.documentElement.style.overflowY !== "scroll") {
        document.documentElement.style.overflowY = "scroll";
      }
    };
  });

  useEffect(() => {
    if(isOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else if(document) {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isOpen]);

  return (
    <menuContext.Provider
      value={{
        isOpen,
        toggleMenu: handleToggleMenu
      }}
    >
      {children}
    </menuContext.Provider>
  );
}