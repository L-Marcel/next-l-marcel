import { HTMLAttributes } from "react";
import { MarkdownDiv } from "./MarkdownDiv";
import { MarkdownTechnologies } from "./MarkdownTechnologies";

export function MarkdownSections({
  id,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  switch(id) {
  case "technologies":
    return (<MarkdownTechnologies/>);
  case "statistics":
  case "images":
    return null;
  case "grid":
    return (
      <div></div>
    );
  default:
    return (<MarkdownDiv {...rest}/>);
  }
}