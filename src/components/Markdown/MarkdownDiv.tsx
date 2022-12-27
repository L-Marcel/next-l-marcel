import { HTMLAttributes } from "react";
import { ReturnButton } from "../Button/ReturnButton";
import { MarkdownDivContainer } from "./styles";
import { technologies } from "../../constants/technologies";
import { TechnologiesButton } from "../Button/TechnologiesButton";

export interface MarkdownDivProps extends HTMLAttributes<HTMLDivElement>{
  isHighlight?: boolean;
  showReturnButton?: boolean;
  currentRepositoryTechnologies?: string[];
}

export function MarkdownDiv({
  isHighlight = false,
  showReturnButton = false,
  currentRepositoryTechnologies = [],
  children,
  ...rest
}: MarkdownDivProps) {
  return (
    <MarkdownDivContainer 
      $highlight={isHighlight} 
      {...rest}
    >
      { showReturnButton && <div id="first-div-return-button">
        <ReturnButton path="/projects"/><p>•</p><TechnologiesButton/>
      </div> }
      {children}
    </MarkdownDivContainer>
  );
}