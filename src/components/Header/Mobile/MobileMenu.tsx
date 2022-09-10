import { MenuProvider } from "../../../context/providers/MenuProvider";
import { ThemeProvider } from "../../../context/providers/ThemeProvider";
import { MobileToggleMenuButton } from "../../Button/MobileToggleMenuButton";
import { MobileToggleThemeButton } from "../../Button/MobileToggleThemeButton";
import { MobileMenuContent } from "./MobileMenuContent";
import { MobileMenuContainer, MobileMenuNavigationContainer, MobileMenuSideBar } from "./styles";

export function MobileMenu() {
  return (
    <MobileMenuNavigationContainer>
      <div className="absolute left-0 h-full w-full bg-primary-600"/>
      <MobileMenuSideBar>
        <MobileMenuContainer>
          <ThemeProvider>
            <MobileToggleThemeButton/>
          </ThemeProvider>
          <MenuProvider>
            <MobileMenuContent/>
            <MobileToggleMenuButton/>
          </MenuProvider>
        </MobileMenuContainer>
      </MobileMenuSideBar>
    </MobileMenuNavigationContainer>
  );
}