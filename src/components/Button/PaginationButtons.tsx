import { usePagination } from "../../context/hooks/usePagination";
import { PaginationIconButtonContainer } from "./styles";

export function PaginationButtons() {
  const { nextPage, previousPage, firstPage, lastPage } = usePagination();

  return (
    <div className="flex flex-row">
      <PaginationIconButtonContainer
        onClick={firstPage} 
        className="rounded-l-md p-0 pr-[1px]" 
        iconClassName="h-[1.8rem] w-[1.8rem]" 
        icon="leftArrows"
      />
      <PaginationIconButtonContainer
        onClick={previousPage} 
        className="p-0 pr-[1px]" 
        iconClassName="h-[1.8rem] w-[1.8rem]" 
        icon="leftArrow"
      />
      <PaginationIconButtonContainer
        onClick={nextPage} 
        className="p-0 pl-[1px]" 
        iconClassName="h-[1.8rem] w-[1.8rem]" 
        icon="rightArrow"
      />
      <PaginationIconButtonContainer
        onClick={lastPage} 
        className="rounded-r-md p-0 pl-[1px]" 
        iconClassName="h-[1.8rem] w-[1.8rem]" 
        icon="rightArrows"
      />
    </div>
  );
}