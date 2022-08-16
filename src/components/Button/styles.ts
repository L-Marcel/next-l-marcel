import tw from "tw-tailwind";

export type ButtonSize = "lg" | "md" | "sm";
export interface ButtonContainerProps {
  size: ButtonSize;
  selected: boolean;
}

export const ButtonContainer = tw.button<ButtonContainerProps>`
  px-4
  md:px-6
  ${props => props.size === "lg"? "text-[2.125rem] h-[2.8125rem]":props.size === "sm"? "text-xl h-8 md:text-2xl md:h-10 md:px-5":"h-[2.8125rem]"}
  ${props => props.selected? "bg-primary-500 text-gray-700 dark:bg-primary-500 dark:text-gray-700":""}
`;

export const IconButtonContainer = tw.button`
  p-[.6875rem]
  h-[2.8125rem]
  w-[2.8125rem]
`;