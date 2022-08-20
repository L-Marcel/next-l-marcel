import { HTMLAttributes } from "react";
import { Icon } from "../Icon";
import { MarkdownListItemContainer } from "./styles";

export function MarkdownListItem({
  children,
  id,
  ...rest
}: HTMLAttributes<HTMLLIElement> & { ordered: boolean | undefined }) {
  rest.ordered = undefined;

  switch(id) {
  case "checked":
    return (
      <MarkdownListItemContainer 
        {...rest}
        className="flex flex-row items-start gap-2"
      >
        <Icon 
          withoutTooltip 
          name="checked" 
          className="mt-[2px] min-h-[1.4rem] min-w-[1.4rem] text-primary-500 md:min-h-[1.4125rem] md:min-w-[1.4125rem]"
        />
        {children}
      </MarkdownListItemContainer>
    );
  default:
    return (
      <MarkdownListItemContainer {...rest}>
        {children}
      </MarkdownListItemContainer>
    );
  }
}