import { tw } from "../../services/tw";

export type ButtonSize = "lg" | "md";
export interface ButtonContainerProps {
  size: ButtonSize;
  selected: boolean;
}

export const ButtonContainer = tw.button<ButtonContainerProps>`
  px-6
  pb-[0.2rem]
  h-[2.8125rem]
  ${props => props.size === "lg"? "text-[2.125rem]":""}
  ${props => props.selected? "bg-primary-500 text-gray-700 dark:bg-primary-500 dark:text-gray-700":""}
`;

export const IconButtonContainer = tw.button`
  p-[.6875rem]
  h-[2.8125rem]
  w-[2.8125rem]
`;