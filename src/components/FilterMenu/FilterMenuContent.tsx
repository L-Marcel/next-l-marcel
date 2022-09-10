import { useFilter } from "../../context/hooks/useFilter";
import { FilterMenuOptionButton } from "../Button/FilterMenuOptionButton";

export function FilterMenuContent() {
  const { filter, toggleTechnology } = useFilter();
  
  return (
    <>
      { Object.entries(filter.technologies).map(([technology, isSelected]) => {
        if(technology === "_some") {
          return null;
        }

        return (
          <FilterMenuOptionButton
            key={`${technology}-filter-option`}
            onClick={toggleTechnology}
            isSelected={isSelected}
            item={technology}
          />
        );
      }) }
    </>
  );
}