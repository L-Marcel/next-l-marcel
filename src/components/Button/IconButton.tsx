import { HTMLAttributes } from "react";
import { Icon, IconType } from "../Icon";
import { IconButtonContainer } from "./styles";

export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

export function IconButton({
  icon,
  ...rest
}: IconButtonProps) {
  return (
    <IconButtonContainer
      {...rest}
    >
      <Icon name={icon}/>
    </IconButtonContainer>
  );
}