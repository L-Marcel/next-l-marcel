import { ReactNode } from "react";
import { TooltipContainer, TooltipSpan, TooltipText } from "./styles";

interface TooltipProps {
  label: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  space?: number;
}

export function Tooltip({
  label,
  children,
  className,
  space = 1,
  containerClassName
}: TooltipProps) {
  return (
    <TooltipContainer className={containerClassName}>
      <TooltipText className={className} space={space}>
        <TooltipSpan>{label}</TooltipSpan>
      </TooltipText>
      {children}
    </TooltipContainer>
  );
}