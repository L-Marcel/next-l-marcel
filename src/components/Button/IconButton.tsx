import { HTMLAttributes } from "react";
import { Icon, IconType } from "../Icon";
import { Tooltip } from "../Tooltip";
import { IconButtonContainer, IconButtonSize } from "./styles";

export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  size?: IconButtonSize;
  tooltipSpace?: number;
}

export function IconButton({
  icon,
  title,
  size = "md",
  tooltipSpace = 1,
  ...rest
}: IconButtonProps) {
  if(!title) {
    return (
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
    );
  }

  return (
    <Tooltip label={title} space={tooltipSpace} className="mt-2">
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