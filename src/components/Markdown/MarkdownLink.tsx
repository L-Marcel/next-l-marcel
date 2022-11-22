import Link from "next/link";
import { HTMLAttributes } from "react";
import { Button } from "../Button";
import { Tooltip } from "../Tooltip";

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
      <Link 
        className={className}
        href={href}
        {...rest}
      />
    );
  }

  return (
    <Tooltip label={href} containerClassName={className}>
      <Button
        size="sm"
        onClick={() => window.open(href, "__blank__")}
        className={(className ?? "") + " shadow-sm md:shadow-lg"}
      >
        {rest?.children}
      </Button>
    </Tooltip>
  );
}