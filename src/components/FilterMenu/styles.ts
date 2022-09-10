import tw from "tw-tailwind";
import { IconButton, IconButtonProps } from "../Button/IconButton";

export const FilterMenuContainer = tw.div`
  relative
  w-full
  mt-5
  px-16
  py-5
  gap-6
  flex
  flex-row
  flex-wrap
  bg-white-500
  dark:bg-gray-600
  border-y-2
  border-primary-600
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