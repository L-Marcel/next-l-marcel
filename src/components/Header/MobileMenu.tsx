import { ThemeProvider } from "../../context/providers/ThemeProvider";
import { MobileToggleThemeButton } from "../Button/MobileToggleThemeButton";
import { Icon } from "../Icon";
import { MobileMenuButtonsGroup, MobileMenuContainer, MobileMenuMainButton, MobileMenuSideBar } from "./styles";

export function MobileMenu() {
  return (
    <MobileMenuContainer>
      <MobileMenuSideBar>
        <MobileMenuButtonsGroup>
          <ThemeProvider>
            <MobileToggleThemeButton/>
          </ThemeProvider>
          <MobileMenuMainButton>
            <Icon
              className="!text-[2.1rem] duration-100" 
              name="menu"
              title="menu"
              withoutTooltip
            />
          </MobileMenuMainButton>
          
        </MobileMenuButtonsGroup>
      </MobileMenuSideBar>
    </MobileMenuContainer>
  );
}