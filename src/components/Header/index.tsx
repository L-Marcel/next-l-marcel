import { useTheme } from "next-themes";
import { IconButton } from "../Button/IconButton";
import { NavLink } from "../Navigation/NavLink";
import { VerticalDivider } from "../VerticalDivider";

export function Header() {
  const { theme, setTheme } = useTheme();
  
  const isDarkMode = theme === "dark";

  function handleToggleTheme() {
    console.log(theme);
    setTheme(isDarkMode? "light":"dark");
  }

  return (
    <header className="border-t-[1.3125rem] border-primary-600">
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
          <li><IconButton onClick={handleToggleTheme} icon={isDarkMode? "moon":"sun"}/></li>
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