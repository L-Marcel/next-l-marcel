import tw from "tw-tailwind";
import { IconButton, IconButtonProps } from "../Button/IconButton";

export const FilterMenuContainer = tw.div`
  relative
  flex
  flex-row
  items-center
  w-full
  flex-wrap
  justify-start
  mt-5
  gap-2
  px-16
  py-4
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