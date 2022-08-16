import { HTMLAttributes } from "react";
import { MarkdownDivContainer } from "./styles";

export interface MarkdownDivProps extends HTMLAttributes<HTMLDivElement>{
  isHighlight?: boolean;
}

export function MarkdownDiv({
  isHighlight = false,
  ...rest
}: MarkdownDivProps) {
  return (
    <MarkdownDivContainer 
      isHighlight={isHighlight} 
      {...rest}
    />
  );
}