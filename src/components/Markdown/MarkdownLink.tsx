import { HTMLAttributes } from "react";
import { Button } from "../Button";
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
      <MarkdownAContainer
        className={className}
        href={href}
        {...rest}
      />
    );
  }

  return (
    <Button
      size="sm"
      onClick={() => window.open(href, "__blank__")}
      title={href}
      className={className}
    >
      {rest?.children}
    </Button>
  );
}