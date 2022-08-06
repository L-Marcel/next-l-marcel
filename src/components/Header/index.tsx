import { NavLink } from "../Navigation/NavLink";

export function Header() {
  return (
    <header className="border-t-[1.75rem] border-primary-600">
      <nav className="mt-[-1.75rem] flex flex-row justify-between px-[5.125rem]">
        <ul className="flex flex-row">
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
        <ul className="flex flex-row">
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