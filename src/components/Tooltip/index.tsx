import { ReactNode } from "react";
import { TooltipContainer, TooltipSpan, TooltipText } from "./styles";

interface TooltipProps {
  label: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Tooltip({
  label,
  children,
  className,
  containerClassName
}: TooltipProps) {
  return (
    <TooltipContainer className={containerClassName}>
      <TooltipText className={className}>
        <TooltipSpan>{label}</TooltipSpan>
      </TooltipText>
      {children}
    </TooltipContainer>
  );
}