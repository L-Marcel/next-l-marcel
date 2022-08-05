import { tw } from "../../services/tw";

export type StyledButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement>;

export const StyledButton = tw.button<StyledButtonProps>`
  w-16
  h-8
  bg-green-300
  rounded-md
`;