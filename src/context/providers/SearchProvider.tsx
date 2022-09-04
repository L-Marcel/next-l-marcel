import { ReactNode, useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { createContext } from "use-context-selector";
import { Repository } from "../../services/Github";
import { Pagination } from "./reducers/pagination";

type Filter = {
  names: string[];
};

export type PaginationType = {
  page: number;
  max: number;
  min: number;
};

interface SearchContext {
  setFilter: (filter: Partial<Filter>) => void;
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
}

export function SearchProvider({
  children,
  repositories
}: SearchProviderProps) {
  const [filter, setFilter] = useState<Filter>({
    names: []
  });

  const _setFilter = useCallback((filter: Partial<Filter>) => {
    setFilter(oldFilter => {
      return {
        ...oldFilter,
        ...filter
      };
    });
  }, [setFilter]);

  const [pagination, dispatch] = useReducer(Pagination.reducer, {
    max: 0,
    min: 0,
    page: 0
  });

  const setPage = useCallback((page: number, onError?: (page: number) => void) => {
    dispatch(Pagination.setPage(page, onError));
  }, [dispatch]);

  const updatePageLimit = useCallback((min: number, max: number) => {
    dispatch(Pagination.updateLimit(min, max));
  }, [dispatch]);

  const nextPage = useCallback(() => {
    dispatch(Pagination.nextPage());
  }, [dispatch]);

  const lastPage = useCallback(() => {
    dispatch(Pagination.lastPage());
  }, [dispatch]);

  const previousPage = useCallback(() => {
    dispatch(Pagination.previousPage());
  }, [dispatch]);

  const firstPage = useCallback(() => {
    dispatch(Pagination.firstPage());
  }, [dispatch]);

  const filteredRepositories = useMemo(() => {
    const repositoriesOrderedFilterByName = repositories
      .map(repository => {
        if(filter.names.includes(repository.name)) {
          repository._filtered = true;
        } else {
          repository._filtered = false;
        }

        return repository;
      })
      .sort((a, b) => Number(b.importedConfig?.pinned ?? false) - Number(a.importedConfig?.pinned ?? false))
      .sort((a, b) => Number(b._filtered) - Number(a._filtered));

    firstPage();
    return repositoriesOrderedFilterByName;
  }, [repositories, firstPage, filter]);

  useEffect(() => {
    const size = repositories.length;

    const min = 0;
    const max = Math.ceil(size/12) - 1;

    updatePageLimit(min, max);
  }, [repositories, updatePageLimit]);

  return (
    <searchContext.Provider
      value={{
        setFilter: _setFilter,
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