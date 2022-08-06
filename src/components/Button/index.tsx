import { HTMLAttributes } from "react";
import { ButtonContainer, ButtonSize } from "./styles";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  actived?: boolean;
}

export function Button({
  size = "md",
  actived = false,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      actived={actived}
      size={size}
      {...rest}
    />
  );
}