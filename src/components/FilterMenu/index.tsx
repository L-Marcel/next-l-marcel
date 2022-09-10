import { Disclosure } from "@headlessui/react";
import { useMenuIsOpen } from "../../context/hooks/useMenuIsOpen";
import { FilterMenuContent } from "./FilterMenuContent";
import { FilterMenuContainer } from "./styles";

export function FilterMenu() {
  const { isOpen } = useMenuIsOpen();

  return (
    <Disclosure as="section" className="hidden w-full transition-all md:flex">
      { isOpen && <Disclosure.Panel as={FilterMenuContainer} static>
        <FilterMenuContent/>
      </Disclosure.Panel> }
    </Disclosure>
  );
}