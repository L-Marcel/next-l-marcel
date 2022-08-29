import { ChangeEvent, useEffect, useRef, useState } from "react";
import { usePagination } from "../../context/hooks/usePagination";
import { PaginationInputContainer } from "./styles";


export function PageInput() {
  const ref = useRef<HTMLInputElement>(null);

  const { 
    setPage,
    pagination  
  } = usePagination();

  const { page } = pagination;

  const [paginationInputValue, setPaginationInputValue] = useState(page);

  useEffect(() => {
    setPaginationInputValue(page + 1);

    if(ref.current !== null) {
      ref.current.scrollIntoView({ behavior: "auto" });
    }
  }, [page, ref, setPaginationInputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(paginationInputValue - 1, (page) => {
        setPaginationInputValue(page + 1);
      });
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [setPage, paginationInputValue]);

  function handleOnChangePaginationInputValue(e: ChangeEvent<HTMLInputElement>) {
    setPaginationInputValue(Number(e.target.value) + 1);
  }

  return (
    <PaginationInputContainer 
      ref={ref}
      value={paginationInputValue}
      onChange={handleOnChangePaginationInputValue}
    />
  );
}