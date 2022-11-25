import { HTMLAttributes } from "react";
import { useMenuIsOpen } from "../../context/hooks/useMenuIsOpen";
import { useRouter } from "../../context/hooks/useRouter";
import { ToggleFilterMenuButtonContainer, ToggleFilterMenuButtonContainerLabel } from "./styles";

export function ToggleFilterMenuButton({
  ...rest
}: HTMLAttributes<HTMLButtonElement>) {
  const { isNotPtBr } = useRouter();
  const { toggleMenu, isOpen } = useMenuIsOpen();

  function getTranslatedText(text: string, isNotPtBr: boolean) {
    if(isNotPtBr) {
      switch(text) {
      default:
        return text;
      }
    }

    switch(text) {
    case "filters":
      return "filtros";
    case "projects":
      return "projetos";
    default:
      return text;
    }
  }


  return (
    <>
      <ToggleFilterMenuButtonContainer
        id="toggle-filter-menu-button-container"
        open={isOpen}
        onClick={toggleMenu}
        icon={isOpen? "returnLeftArrow":"filter"}
        iconClassName="!text-[2.1rem] md:!text-[1.4125rem]"
        size="sm"
        {...rest}
      />
      <ToggleFilterMenuButtonContainerLabel
        htmlFor="toggle-filter-menu-button-container"
      >
        {isOpen? getTranslatedText("projects", isNotPtBr):getTranslatedText("filters", isNotPtBr)}
      </ToggleFilterMenuButtonContainerLabel>
    </>
  );
}