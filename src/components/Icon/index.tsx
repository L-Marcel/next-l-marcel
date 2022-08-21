import { IconBaseProps } from "react-icons";
import { BiCubeAlt } from "react-icons/bi";
import { BsCheck2Circle, BsClockHistory, BsDownload, BsXLg } from "react-icons/bs";
import { FaAlignRight, FaMoon, FaSun } from "react-icons/fa";
import { FiCopy, FiPaperclip } from "react-icons/fi";
import { GiSpellBook } from "react-icons/gi";
import { IoIosSchool } from "react-icons/io";
import { SiChakraui, SiCss3, SiDiscord, SiDocker, SiFigma, SiFramer, SiGit, SiGitbook, SiGithub, SiHtml5, SiInstagram, SiJamstack, SiJavascript, SiJest, SiJsonwebtokens, SiLinkedin, SiMaildotru, SiNextdotjs, SiNodedotjs, SiNpm, SiPrisma, SiReact, SiSocketdotio, SiTailwindcss, SiTypescript, SiVisualstudiocode, SiWhatsapp, SiYarn } from "react-icons/si";
import { VscSymbolKeyword, VscSymbolMethod } from "react-icons/vsc";
import { Tooltip } from "../Tooltip";
import { AsRocketseat } from "./assets/AsRocketseat";

const icons = {
  download: BsDownload,
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
  checked: BsCheck2Circle,
  menu: FaAlignRight,
  whatsapp: SiWhatsapp,
  linkedin: SiLinkedin,
  github: SiGithub,
  discord: SiDiscord,
  instagram: SiInstagram,
  rocketseat: AsRocketseat,
  mail: SiMaildotru,
  x: BsXLg,
  resume: VscSymbolKeyword,
  projects: VscSymbolMethod,
  achievements: GiSpellBook,
  school: IoIosSchool,
  cube: BiCubeAlt,
  clip: FiPaperclip,
  copy: FiCopy
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
      (size === "sm"? 
        "text-[1.4rem] md:text-[1.4125rem] ":
        "text-[1.6rem] md:text-4xl "
      ) + 
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