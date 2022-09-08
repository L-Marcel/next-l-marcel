import { useCallback, useReducer } from "react";
import { Pagination } from "../providers/reducers/pagination";

export function usePaginationReducer() {
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


  return {
    pagination,
    dispatch,
    setPage,
    updatePageLimit,
    nextPage,
    lastPage,
    previousPage,
    firstPage
  };
}