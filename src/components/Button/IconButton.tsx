import { HTMLAttributes } from "react";
import { Icon, IconType } from "../Icon";
import { Tooltip } from "../Tooltip";
import { IconButtonContainer, IconButtonSize } from "./styles";

export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  size?: IconButtonSize;
  iconClassName?: string;
  disabled?: boolean;
}

export function IconButton({
  icon,
  title,
  size = "md",
  iconClassName,
  disabled = false,
  ...rest
}: IconButtonProps) {
  if(!title) {
    return (
      <IconButtonContainer
        size={size}
        disabled={disabled}
        {...rest}
      >
        <Icon
          className={(iconClassName ?? "") + " duration-100"} 
          name={icon} 
          title={title} 
          withoutTooltip
        />
      </IconButtonContainer>
    );
  }

  return (
    <Tooltip label={title} className="mt-2">
      <IconButtonContainer
        size={size}
        {...rest}
      >
        <Icon
          className="duration-100" 
          name={icon} 
          title={title} 
          withoutTooltip
        />
      </IconButtonContainer>
    </Tooltip>
  );
}