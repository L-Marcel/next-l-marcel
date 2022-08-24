
import { useContextSelector } from "use-context-selector";
import { searchContext } from "../providers/SearchProvider";

export function useSearchFilter() {
  return useContextSelector(searchContext, search => {
    return {
      setFilter: search.setFilter
    };
  });
}