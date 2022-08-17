import { HTMLAttributes } from "react";
import { Icon, IconType } from "../Icon";
import { Tooltip } from "../Tooltip";
import { IconButtonContainer } from "./styles";

export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

export function IconButton({
  icon,
  title,
  ...rest
}: IconButtonProps) {
  if(!title) {
    return (
      <IconButtonContainer
        {...rest}
      >
        <Icon className="duration-100" name={icon} title={title} withoutTooltip/>
      </IconButtonContainer>
    );
  }

  return (
    <Tooltip label={title} className="mt-2">
      <IconButtonContainer
        {...rest}
      >
        <Icon className="duration-100" name={icon} title={title} withoutTooltip/>
      </IconButtonContainer>
    </Tooltip>
  );
}