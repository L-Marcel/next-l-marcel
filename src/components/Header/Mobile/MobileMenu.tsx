import { MenuProvider } from "../../../context/providers/MenuProvider";
import { ThemeProvider } from "../../../context/providers/ThemeProvider";
import { MobileMenuContent } from "./MobileMenuContent";
import { MobileToggleMenuButton } from "./MobileToggleMenuButton";
import { MobileToggleThemeButton } from "./MobileToggleThemeButton";
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