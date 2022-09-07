import { Disclosure, Transition } from "@headlessui/react";
import { useMenuIsOpen } from "../../context/hooks/useMenuIsOpen";
import { FilterMenuContainer } from "./styles";

export function FilterMenu() {
  const { isOpen } = useMenuIsOpen();

  return (
    <Disclosure as="section" className="hidden w-full transition-all md:flex">
      <Transition
        show={isOpen}
        className="w-full"
        enter="transform transition-all duration-[400ms] ease-in-out"
        enterFrom="transform scale-y-95 opacity-0"
        enterTo="transform scale-y-100 opacity-100"
        leave="transform transition-all duration-[400ms] ease-in-out"
        leaveFrom="transform scale-y-100 opacity-100"
        leaveTo="transform scale-y-95 opacity-0"
      >
        <Disclosure.Panel as={FilterMenuContainer} static>
          <p>...temporary!</p>
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
}