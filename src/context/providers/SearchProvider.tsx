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
  const [pagination, dispatch] = useReducer(Pagination.reducer, {
    max: 0,
    min: 0,
    page: 0
  });

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

  const filteredRepositories = useMemo(() => {
    const repositoriesFilteredByName = repositories.filter(repository => filter.names.includes(repository.name));

    const { page } = pagination;
    const repositoriesInPage = repositoriesFilteredByName.slice(page * 12, 12 + (page * 12));

    return repositoriesInPage;
  }, [repositories, pagination, filter]);

  useEffect(() => {
    const size = filteredRepositories.length;

    const min = 0;
    const max = Math.ceil(size/9);

    Pagination.updateLimit(dispatch, min, max);
  }, [filteredRepositories.length, dispatch]);

  return (
    <searchContext.Provider
      value={{
        setFilter: _setFilter,
        filteredRepositories,
        pagination,
        nextPage: Pagination.nextPage(dispatch),
        lastPage: Pagination.lastPage(dispatch),
        previousPage: Pagination.previousPage(dispatch),
        firstPage: Pagination.firstPage(dispatch)
      }}
    >
      {children}
    </searchContext.Provider>
  );
}