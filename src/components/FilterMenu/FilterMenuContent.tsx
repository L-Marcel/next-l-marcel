import { FilterMenuGroup } from "./FilterMenuGroup";
import { FilterMenuContainer } from "./styles";

export function FilterMenuContent() {
  return (
    <FilterMenuContainer>
      <FilterMenuGroup
        type="technologies"
        label="technologies"
      />
      <FilterMenuGroup
        type="status"
        label="status"
      />
      <FilterMenuGroup
        type="as"
        label="type"
      />
      <FilterMenuGroup
        type="have"
        label="documents"
      />
    </FilterMenuContainer>
  );
}