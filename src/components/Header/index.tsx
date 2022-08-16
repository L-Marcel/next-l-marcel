import dynamic from "next/dynamic";
import { IconButton } from "../Button/IconButton";

import { NavLink } from "../Navigation/NavLink";
import { VerticalDivider } from "../VerticalDivider";

const ToggleThemeButton = dynamic<unknown>(
  async() => (await import("../Button/ToggleThemeButton")).ToggleThemeButton,
  {
    loading: () => <IconButton
      className="!pl-[10px]" 
      icon="moon"
      title="loading..."
    />,
    ssr: false
  }
);

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
            <ToggleThemeButton/>
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