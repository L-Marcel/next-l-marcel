import { useContextSelector } from "use-context-selector";
import { menuContext } from "../providers/MenuProvider";

export function useMobileMenuIsOpen() {
  return useContextSelector(menuContext, menu => ({
    isOpen: menu.isOpen,
    toggleMenu: menu.toggleMenu
  }));
}