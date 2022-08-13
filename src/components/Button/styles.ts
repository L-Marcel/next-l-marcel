import tw from "tw-tailwind";

export type ButtonSize = "lg" | "md" | "sm";
export interface ButtonContainerProps {
  size: ButtonSize;
  selected: boolean;
}

export const ButtonContainer = tw.button<ButtonContainerProps>`
  px-6
  ${props => props.size === "lg"? "text-[2.125rem] h-[2.8125rem]":props.size === "sm"? "text-2xl h-10 px-5":"h-[2.8125rem]"}
  ${props => props.selected? "bg-primary-500 text-gray-700 dark:bg-primary-500 dark:text-gray-700":""}
`;

export const IconButtonContainer = tw.button`
  p-[.6875rem]
  h-[2.8125rem]
  w-[2.8125rem]
`;