import { IconBaseProps } from "react-icons";
import { BsCheck2Circle, BsClockHistory } from "react-icons/bs";
import { FaDownload, FaMoon, FaSun } from "react-icons/fa";
import { SiChakraui, SiCss3, SiDocker, SiFigma, SiFramer, SiGit, SiGitbook, SiHtml5, SiJamstack, SiJavascript, SiJest, SiJsonwebtokens, SiNextdotjs, SiNodedotjs, SiNpm, SiPrisma, SiReact, SiSocketdotio, SiTailwindcss, SiTypescript, SiVisualstudiocode, SiYarn } from "react-icons/si";
import { Tooltip } from "../Tooltip";

const icons = {
  download: FaDownload,
  sun: FaSun,
  moon: FaMoon,
  clock: BsClockHistory,
  "next.js": SiNextdotjs,
  "react.js": SiReact,
  "node.js": SiNodedotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  css: SiCss3,
  html: SiHtml5,
  git: SiGit,
  vscode: SiVisualstudiocode,
  npm: SiNpm,
  yarn: SiYarn,
  jamstack: SiJamstack,
  figma: SiFigma,
  docker: SiDocker,
  gitbook: SiGitbook,
  "json-web-tokens": SiJsonwebtokens,
  prisma: SiPrisma,
  "framer-motion": SiFramer,
  jest: SiJest,
  "socket.io": SiSocketdotio,
  "chakra-ui": SiChakraui,
  tailwind: SiTailwindcss,
  checked: BsCheck2Circle
};

export type IconType = keyof typeof icons;
export type IconSize = "sm" | "md";
export interface IconProps extends IconBaseProps {
  name?: IconType;
  size?: IconSize;
  tooltip?: string;
  withoutTooltip?: boolean;
}

export function Icon({
  name = "download",
  size = "sm",
  withoutTooltip = false,
  className,
  ...rest
}: IconProps) {
  const icon = icons[name]({
    className: 
      "drop-shadow-sm md:drop-shadow-lg " +
      (size === "sm"? "text-[1.4rem] md:text-[1.4125rem] ":"text-[1.6rem] md:text-4xl ") + 
      className,
    ...rest
  });

  if(withoutTooltip) {
    return icon;
  }

  return (<Tooltip label={name}>
    {icon}
  </Tooltip>);
}