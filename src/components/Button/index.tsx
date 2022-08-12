import { HTMLAttributes } from "react";
import { ButtonContainer, ButtonSize } from "./styles";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  selected?: boolean;
}

export function Button({
  size = "md",
  selected = false,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      selected={selected}
      size={size}
      {...rest}
    />
  );
}