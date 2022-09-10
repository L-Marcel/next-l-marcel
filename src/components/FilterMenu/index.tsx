import { useMenuIsOpen } from "../../context/hooks/useMenuIsOpen";
import { FilterMenuContent } from "./FilterMenuContent";

export function FilterMenu() {
  const { isOpen } = useMenuIsOpen();

  return (
    <section className="hidden w-full transition-all md:flex">
      { isOpen && <FilterMenuContent/> }
    </section>
  );
}