import { ThemeProvider } from "../../context/providers/ThemeProvider";
import { ToggleThemeButton } from "../Button/ToggleThemeButton";

import { NavLink } from "../Navigation/NavLink";
import { VerticalDivider } from "../VerticalDivider";
import { MobileMenu } from "./Mobile/MobileMenu";

export function Header() {
  return (
    <>
      <header className="fixed top-[-2.78rem] z-50 w-full md:drop-shadow-lg">
        <nav className="absolute bottom-0 top-[2.78rem] z-40 hidden w-full flex-row justify-between px-16 md:flex">
          <ul className="nav-links flex flex-row">
            <NavLink
              path="/"
              name="resume"
            />
            <NavLink
              path="/projects"
              name="projects"
            />
            <NavLink
              path="/achievements"
              name="achievements"
            />
          </ul>
          <ul className="nav-links flex flex-row">
            <li>
              <ThemeProvider>
                <ToggleThemeButton/>
              </ThemeProvider>
            </li>
            <li className="h-[2.8125rem]"><VerticalDivider/></li>
            <NavLink
              path=""
              name="pt-br"
              locale="pt-br"
            />
            <NavLink
              path=""
              name="en-us"
              locale="en-us"
            />
          </ul>
        </nav>
        <span className="fixed top-[2.78rem] z-[-5] w-full border-t-[1.3125rem] border-primary-600 drop-shadow-sm"></span>
      </header>
      <MobileMenu/>
    </>
  );
}