import { HTMLAttributes } from "react";
import { Icon } from "../Icon";
import { MarkdownListItemContainer } from "./styles";

export function MarkdownListItem({
  children,
  id,
  ...rest
}: HTMLAttributes<HTMLLIElement>) {
  switch(id) {
  case "checked":
    return (
      <MarkdownListItemContainer 
        {...rest}
        className="flex flex-row items-start gap-2"
      >
        <Icon withoutTooltip name="checked" className="mt-[2px] text-primary-500"/>
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