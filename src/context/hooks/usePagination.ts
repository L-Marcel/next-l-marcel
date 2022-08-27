import { useContextSelector } from "use-context-selector";
import { searchContext } from "../providers/SearchProvider";

export function usePagination() {
  return useContextSelector(searchContext, search => ({
    page: search.pagination.page,
    nextPage: search.nextPage,
    lastPage: search.lastPage,
    previousPage: search.previousPage,
    firstPage: search.firstPage
  }));
}