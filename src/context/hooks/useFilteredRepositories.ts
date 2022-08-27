import { useContextSelector } from "use-context-selector";
import { searchContext } from "../providers/SearchProvider";

export function useFilteredRepositories() {
  return useContextSelector(searchContext, search => ({
    filteredRepositories: search.filteredRepositories
  }));
}