import tw from "tw-tailwind";
import { Icon } from "../Icon";

export const SearchBox = tw.div`
  relative
  flex
  w-full 
  flex-col 
  justify-start
  max-w-xl
  z-40
`;

export const SearchInputIcon = tw(Icon)`
  absolute
  h-full
  w-11
  rounded-md
  p-[8.2px]
  ${props => props.isFocused? 
    "bg-primary-500 dark:bg-primary-500 !text-white-500 dark:!text-gray-700":
    "bg-white-700 dark:bg-gray-400 !text-gray-700 dark:!text-white-500"}
  pl-[6.2px]
  border-l-2
  border-l-primary-500
`;

export const SearchInput = tw.input`
  rounded-md
  pl-14
  pr-2
  py-2
  text-gray-700
  dark:text-white-500
  bg-white-500
  dark:bg-gray-500
  ring-offset-[3px]
  dark:ring-offset-gray-700
  ring-offset-white-default
  focus:ring-2
  focus:ring-primary-500
  focus-visible:ring-2
  focus-visible:!text-gray-700
  focus-visible:dark:!text-white-500
  focus-visible:ring-primary-500
  focus-visible:!bg-white-500
  focus-visible:dark:!bg-gray-500
  placeholder:text-white-800
  placeholder:dark:text-white-800
  border-r-2
  border-r-white-700
  dark:border-r-gray-400
  focus-visible:border-r-primary-500
  focus-visible:dark:border-r-primary-500
  w-full
`;

export const SearchOptions = tw.ul`
  absolute
  top-12
  z-40
  flx
  flex-col
  border-t-2
  border-t-primary-500
  rounded-l-md
  my-4
  py-1
  gap-1
  bg-white-500
  dark:bg-gray-600
  w-full
  max-h-[50vh]
  h-max
  overflow-y-auto
  overflow-x-hidden
  border-b-2
  border-b-white-700
  dark:border-b-gray-400
  scrollbar-thin 
  scrollbar-track-white-700 
  scrollbar-thumb-primary-500 
  dark:scrollbar-track-gray-500
  hover:scrollbar-thumb-primary-600
`;

export const SearchOption = tw.li`
  flex
  flex-row
  items-center
  gap-1
  px-4
  py-[5px]
  cursor-pointer
  hover:bg-white-600
  hover:dark:bg-gray-400
  capitalize
  border-b-2
  border-b-white-700
  dark:border-b-gray-500
  last-of-type:border-none
`;

export const PaginationInputContainer = tw.input`
  w-12
  px-1
  text-center
  appearance-[textfield]
  dark:opacity-80
  text-gray-600
  dark:text-white-500
  bg-white-700
  dark:bg-gray-400
  focus:!bg-primary-500
  focus:dark:!bg-primary-500
  focus-visible:!bg-primary-500
  focus-visible:dark:!bg-primary-500
`;

export interface CheckboxLabelProps {
  isEnabled: boolean;
}

export const CheckboxLabel = tw.p<CheckboxLabelProps>`
  text-base ${props => props.isEnabled? "":"line-through text-gray-default dark:text-gray-default"}
`;

export const CheckboxDisabledLabel = tw.p`
  text-base
  italic
  text-gray-default
  dark:text-gray-default
`;