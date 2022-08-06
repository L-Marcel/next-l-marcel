import { tw } from "../../services/tw";

export type ButtonSize = "lg" | "md";
export interface ButtonContainerProps {
  size: ButtonSize;
  actived: boolean;
}

export const ButtonContainer = tw.button<ButtonContainerProps>`
  px-8
  pb-1
  h-[3.75rem]
  ${props => props.size === "lg"? "text-[2.125rem]":""}
  ${props => props.actived? "bg-primary-600 text-white-500":""}
`;