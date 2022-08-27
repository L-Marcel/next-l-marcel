import { usePagination } from "../../context/hooks/usePagination";

export function PaginationButtons() {
  const { nextPage, previousPage } = usePagination();

  return (
    <>
      <button onClick={previousPage}>previous</button>
      <button onClick={nextPage}>next</button>
    </>
  );
}