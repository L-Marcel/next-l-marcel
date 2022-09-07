import { useMenuIsOpen } from "../../../context/hooks/useMenuIsOpen";
import { Icon } from "../../Icon";
import { MobileMenuMainButton } from "./styles";

export function MobileToggleMenuButton() {
  const { isOpen, toggleMenu } = useMenuIsOpen();
  
  return (
    <MobileMenuMainButton onClick={toggleMenu}>
      <Icon
        className="!text-[2.1rem] duration-100" 
        name={isOpen? "x":"menu"}
        title="menu"
        withoutTooltip
      />
    </MobileMenuMainButton>
  );
}