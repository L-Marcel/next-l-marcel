import tw from "tw-tailwind";
import { IconButton, IconButtonProps } from "../Button/IconButton";

export const FilterMenuSection = tw.section`
  relative
  bottom-12
  max-h-[75vh]
  overflow-hidden
  rounded-t-2xl
  flex
  border-y-2
  border-primary-600
  md:bottom-0
`;

export const FilterMenuContainer = tw.div`
  relative
  w-full 
  px-12
  md:px-16
  py-10
  max-w-full
  gap-6
  flex
  flex-row
  flex-wrap
  bg-white-500
  dark:bg-gray-600
  overflow-y-auto
`;

export interface ToggleFilterMenuButtonContainerProps extends IconButtonProps {
  isOpen: boolean;
}

export const ToggleFilterMenuButtonContainer = tw(IconButton)<ToggleFilterMenuButtonContainerProps>`
  ${props => props.isOpen? "!bg-primary-500 !text-gray-700 hover:!bg-primary-600":""}
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