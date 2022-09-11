import tw from "tw-tailwind";
import { IconButton, IconButtonProps } from "../Button/IconButton";

export const FilterMenuContainer = tw.section`
  w-full 
  px-12
  md:px-16
  py-6
  max-w-full
  gap-6
  mb-4
  flex
  flex-row
  flex-wrap
  overflow-y-auto
`;

export const FilterMenuGroupContainer = tw.ul`
  flex
  flex-row
  items-center
  w-full
  flex-wrap
  justify-start
  gap-2
`;

export interface ToggleFilterMenuButtonContainerProps extends IconButtonProps {
  isOpen: boolean;
}

export const ToggleFilterMenuButtonContainer = tw(IconButton)<ToggleFilterMenuButtonContainerProps>`
  active:!text-gray-700
  rounded-full
  border-8
  border-white-600
  dark:border-gray-600
  flex
  flex-row
  justify-center
  items-center
  w-[4.8rem]
  h-[4.8rem]
  fixed
  bottom-0
  ml-[-0.6rem]
  mb-[1rem]
  z-[100]
  md:m-0
  md:border-none
  md:z-0
  md:relative
  md:w-[2.4rem]
  md:h-[2.4rem]
  md:rounded-md
  ${props => props.isOpen? "!bg-primary-500 !text-gray-700 hover:!bg-primary-600":""}
`;

export const ToggleFilterMenuButtonContainerLabel = tw.label`
  -ml-1
  hidden
  text-lg
  capitalize
  italic
  text-gray-default
  dark:text-gray-default
  md:block
  cursor-pointer
`;