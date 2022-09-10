import { HTMLAttributes } from "react";
import { FilterMenuGroup } from "./FilterMenuGroup";
import { FilterMenuContainer, FilterMenuSection } from "./styles";

export function FilterMenuContent({ ...rest }: HTMLAttributes<HTMLElement>) {
  return (
    <FilterMenuSection {...rest}>
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
    </FilterMenuSection>
  );
}