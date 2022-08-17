import { HTMLAttributes } from "react";
import { MarkdownCodeContainer, MarkwodnPreContainer } from "./styles";

export function MarkdownCode(props: HTMLAttributes<HTMLPreElement>) {
  return (
    <MarkwodnPreContainer>
      <MarkdownCodeContainer {...props}/>
    </MarkwodnPreContainer>
  );
}