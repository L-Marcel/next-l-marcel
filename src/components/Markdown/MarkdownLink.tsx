import { HTMLAttributes } from "react";
import { Button } from "../Button";
import { Tooltip } from "../Tooltip";
import { MarkdownAContainer } from "./styles";

export interface MarkdownLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function MarkdownLink({
  className,
  href,
  ...rest
}: MarkdownLinkProps) {
  if(!className?.includes("navigation-link")) {
    return (
      <Tooltip label={href} containerClassName={className}>
        <MarkdownAContainer
          className={className}
          href={href}
          {...rest}
        />
      </Tooltip>
    );
  }

  return (
    <Tooltip label={href} containerClassName={className}>
      <Button
        size="sm"
        onClick={() => window.open(href, "__blank__")}
        className={className + " shadow-lg"}
      >
        {rest?.children}
      </Button>
    </Tooltip>
  );
}