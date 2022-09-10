import { ReactNode, useEffect, useMemo } from "react";
import { createContext } from "use-context-selector";
import { Repository } from "../../services/Github";
import { useFilterReducer } from "../hooks/useFilterReducer";
import { usePaginationReducer } from "../hooks/usePaginationReducer";
import { FilterType } from "./reducers/filter";
import { PaginationType } from "./reducers/pagination";

interface SearchContext {
  filter: FilterType;
  setNames: (names: string[]) => void;
  toggleTechnology: (technology: string) => void;

  filteredRepositories: Repository[];

  pagination: PaginationType;
  nextPage: () => void;
  previousPage: () => void;
  lastPage: () => void;
  firstPage: () => void;
  setPage: (page: number, onError?: (page: number) => void) => void;
}

export const searchContext = createContext<SearchContext>({} as SearchContext);

interface SearchProviderProps {
  children: ReactNode;
  repositories: Repository[];
  badges: string[];
  technologies: string[];
}

export function SearchProvider({
  children,
  repositories,
  technologies,
  badges
}: SearchProviderProps) {
  const {
    filter,
    setNames,
    toggleTechnology,
    getFilteredRepositories
  } = useFilterReducer({
    technologies,
    badges
  });

  const {
    pagination,
    firstPage,
    lastPage,
    nextPage,
    previousPage,
    setPage,
    updatePageLimit
  } = usePaginationReducer();

  const filteredRepositories = useMemo(() => {
    return getFilteredRepositories(repositories, firstPage);
  }, [getFilteredRepositories, repositories, firstPage]);

  useEffect(() => {
    const size = repositories.length;

    const min = 0;
    const max = Math.ceil(size/12) - 1;

    updatePageLimit(min, max);
  }, [repositories, updatePageLimit]);

  return (
    <searchContext.Provider
      value={{
        filter,
        setNames,
        toggleTechnology,

        filteredRepositories,
        
        pagination,
        nextPage,
        lastPage,
        previousPage,
        firstPage,
        setPage
      }}
    >
      {children}
    </searchContext.Provider>
  );
}