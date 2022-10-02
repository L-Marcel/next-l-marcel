import { Icon as ChakraIcon, IconProps as ChakraIconProps } from "@chakra-ui/react";
import { 
  FaReact, FaLinkedinIn, FaGithubAlt, FaDocker, FaGitAlt, 
  FaJava, FaPython, FaDiscord, FaFacebookF, FaBalanceScale,
  FaEye
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiGnubash, SiDart } from "react-icons/si";
import { DiCss3, DiSass } from "react-icons/di";
import { AiFillHtml5, AiFillYoutube } from "react-icons/ai";
import { RiFlutterFill, RiFilePaper2Line, RiFilter3Fill, RiFlashlightFill, RiFlashlightLine } from "react-icons/ri";
import { BsQuestionCircle, BsCheck2Circle, BsInstagram } from "react-icons/bs";
import { 
  AiOutlineCalendar, AiOutlineCheck, AiOutlineInfoCircle, AiOutlineClose, AiFillSafetyCertificate,
  AiFillSound, AiOutlineSound
} from "react-icons/ai";
import { BiError } from "react-icons/bi";
import { IoIosRocket, IoLogoJavascript } from "react-icons/io";
import { FiDownload, FiFigma, FiPaperclip, FiCopy } from "react-icons/fi";
import { GrNode } from "react-icons/gr";
import { VscTerminalPowershell } from "react-icons/vsc";
import { GiShare } from "react-icons/gi";
interface IconProps extends ChakraIconProps {
  name?: string;
};

export const icons = {
  "react.js": FaReact,
  "node.js": GrNode,
  "typescript": SiTypescript,
  "next.js": SiNextdotjs,
  "react native": FaReact,
  "html": AiFillHtml5,
  "css": DiCss3,
  "sass": DiSass,
  "javascript": IoLogoJavascript,
  "docker": FaDocker,
  "flutter": RiFlutterFill,
  "java": FaJava,
  "git": FaGitAlt,
  "python": FaPython,
  "bash": SiGnubash,
  "default": BsQuestionCircle,
  "calendar": AiOutlineCalendar,
  "check": AiOutlineCheck,
  "error": BiError,
  "success": BsCheck2Circle,
  "info": AiOutlineInfoCircle,
  "discord": FaDiscord,
  "github": FaGithubAlt,
  "linkedin": FaLinkedinIn,
  "instagram": BsInstagram,
  "facebook": FaFacebookF,
  "rocketseat": IoIosRocket,
  "youtube": AiFillYoutube,
  "currículo virtual": FiDownload,
  "shell": VscTerminalPowershell,
  "share": GiShare,
  "figma": FiFigma,
  "self": FiPaperclip,
  "documentation": RiFilePaper2Line,
  "license": FaBalanceScale,
  "dart": SiDart,
  "close": AiOutlineClose,
  "filter": RiFilter3Fill,
  "flash": RiFlashlightFill,
  "flash-off": RiFlashlightLine,
  "certificate": AiFillSafetyCertificate,
  "eye": FaEye,
  "copy": FiCopy,
  "sound-on": AiFillSound,
  "sound-off": AiOutlineSound
};

function Icon({ name = "default", ...rest }: IconProps) {
  const _name = name.toLowerCase();
  const icon = icons[_name] ?? icons["default"];
  return (
    <ChakraIcon
      as={icon}
      {...rest}
    />
  );
};

export default Icon;