import { Transition } from "@headlessui/react";
import { useEffect } from "react";
import { useMenuIsOpen } from "../../context/hooks/useMenuIsOpen";
import { FilterMenuContent } from "./FilterMenuContent";

export function FilterMenu() {
  const { isOpen, toggleMenu } = useMenuIsOpen();
  
  function handleOnClickInOverlay() {
    isOpen && toggleMenu();
  }

  useEffect(() => {
    document.documentElement.style.overflow = isOpen? "hidden":"initial";
    document.body.style.overflow = isOpen? "hidden":"initial";
  }, [isOpen]);

  return (
    <>
      <Transition
        show={isOpen}
        unmount={false}
        onClick={handleOnClickInOverlay}
        enter="duration-[350ms] transition-all ease-in-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-[350ms] transition-all ease-in-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="custom-backdrop-blur fixed bottom-0 right-0 z-40 h-screen w-screen bg-[rgba(255,255,255,.3)] dark:bg-[rgba(0,0,0,.3)]"
      />
      <Transition
        show={isOpen}
        unmount={false}
        enter="transform duration-[400ms] transition-all ease-in-out"
        enterFrom="translate-y-full opacity-60"
        enterTo="opacity-100 translate-y-0"
        leave="transform duration-[400ms] transition-all ease-in-out"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-full opacity-60"
        className="fixed bottom-0 z-50 w-full"
      >
        <FilterMenuContent/>
      </Transition>
    </>
  );
}