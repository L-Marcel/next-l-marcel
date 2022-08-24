import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { createContext } from "use-context-selector";
import { Repository } from "../../services/Github";

type Filter = {
  names: string[];
};

type Pagination = {
  page: number;
  max: number;
  min: number;
};

interface SearchContext {
  setFilter: (filter: Partial<Filter>) => void;
  filteredRepositories: Repository[];

  pagination: Pagination;
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
  const [pagination, setPagination] = useState<Pagination>({
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
    return repositories.filter(repository => filter.names.includes(repository.name));
  }, [repositories, filter]);

  useEffect(() => {
    const size = filteredRepositories.length;

    const min = 0;
    const max = Math.ceil(size/10);

    setPagination(({ page }) => {
      return {
        min,
        max,
        page: 
          page > max? max:
            page < min? min:
              page
      };
    });
  }, [filteredRepositories, setPagination]);

  function handleNextPage() {
    setPagination(({ max, min, page }) => {
      const nextPage = page + 1;

      return {
        min,
        max,
        page: 
          page >= max? max:
            nextPage
      };
    });
  }

  function handlePreviousPage() {
    setPagination(({ max, min, page }) => {
      const previousPage = page - 1;

      return {
        min,
        max,
        page: 
          page <= min? min:
            previousPage
      };
    });
  }

  function handleLastPage() {
    setPagination(({ max, min }) => {
      return {
        min,
        max,
        page: max
      };
    });
  }

  function handleFirstPage() {
    setPagination(({ max, min }) => {
      return {
        min,
        max,
        page: min
      };
    });
  }

  return (
    <searchContext.Provider
      value={{
        setFilter: _setFilter,
        filteredRepositories,

        pagination,
        nextPage: handleNextPage,
        previousPage: handlePreviousPage,
        lastPage: handleLastPage,
        firstPage: handleFirstPage
      }}
    >
      {children}
    </searchContext.Provider>
  );
}