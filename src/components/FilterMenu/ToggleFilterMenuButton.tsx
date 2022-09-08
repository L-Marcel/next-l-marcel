import { HTMLAttributes } from "react";
import { useMenuIsOpen } from "../../context/hooks/useMenuIsOpen";
import { ToggleFilterMenuButtonContainer } from "./styles";

export function ToggleFilterMenuButton({
  ...rest
}: HTMLAttributes<HTMLButtonElement>) {
  const { toggleMenu, isOpen } = useMenuIsOpen();

  return (
    <ToggleFilterMenuButtonContainer
      isOpen={isOpen}
      onClick={toggleMenu}
      icon="filter"
      size="sm"
      {...rest}
    />
  );
}