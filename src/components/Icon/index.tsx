import { IconBaseProps } from "react-icons";
import { BsClockHistory } from "react-icons/bs";
import { FaDownload, FaMoon, FaSun } from "react-icons/fa";
import { } from "react-icons/si";

const icons = {
  download: FaDownload,
  sun: FaSun,
  moon: FaMoon,
  clock: BsClockHistory
};

export type IconType = keyof typeof icons;
export interface IconProps extends IconBaseProps {
  name?: IconType;
}

export function Icon({
  name = "download",
  className,
  ...rest
}: IconProps) {
  return (<>
    {icons[name]({
      className: "text-[1.4125rem] " + className,
      ...rest
    })}
  </>);
}