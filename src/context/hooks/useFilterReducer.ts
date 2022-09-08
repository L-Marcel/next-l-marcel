import { useCallback, useReducer } from "react";
import { Repository } from "../../services/Github";
import { Filter } from "../providers/reducers/filter";

export function useFilterReducer() {
  const [filter, dispatch] = useReducer(Filter.reducer, {
    names: [],
    progress: {
      min: 0,
      max: 100
    },
    have: {
      some: false,
      description: false,
      documentation: false,
      figma: false,
    },
    as: {
      some: false,
      common: false,
      highlight: false,
      fork: false,
      template: false,
    },
    is: {
      some: false,
      finished: false,
      deployed: false,
      licensed: false,
    },
    badges: {
      some: false
    },
    technologies: {
      some: false
    },
  });

  const setNames = useCallback((names: string[]) => {
    dispatch(Filter.setNames(names));
  }, [dispatch]);

  
  const getFilteredRepositories = useCallback((repositories: Repository[], onUpdate?: () => void) => {
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

    onUpdate && onUpdate();
    return repositoriesOrderedFilterByName;
  }, [filter]);

  return {
    filter,
    setNames,
    getFilteredRepositories
  };
}