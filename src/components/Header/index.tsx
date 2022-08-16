import { ThemeProvider } from "../../context/providers/ThemeProvider";
import { ToggleThemeButton } from "../Button/ToggleThemeButton";

import { NavLink } from "../Navigation/NavLink";
import { VerticalDivider } from "../VerticalDivider";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-t-[1.3125rem] border-primary-600 drop-shadow-lg">
      <nav className="mt-[-1.3125rem] flex flex-row justify-between px-16">
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
          <li><VerticalDivider/></li>
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
    </header>
  );
}