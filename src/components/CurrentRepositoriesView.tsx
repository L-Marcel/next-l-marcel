import { useMenuIsOpen } from "../context/hooks/useMenuIsOpen";
import { FilterMenu } from "./FilterMenu";
import { RepositoriesListSection } from "./List/RepositoriesList/RepositoriesListSection";

export function CurrentRepositoriesView() {
  const { isOpen } = useMenuIsOpen();

  return isOpen? (
    <FilterMenu/>
  ):(
    <RepositoriesListSection/>
  );
}