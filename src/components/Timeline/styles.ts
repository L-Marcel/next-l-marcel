import tw from "tw-tailwind";
import { IconButton } from "../Button/IconButton";

export const TimelineElementTimerContainer = tw.time`
  absolute 
  right-5 
  bottom-[-12px] 
  whitespace-nowrap 
  rounded-md 
  border-x-2 
  border-x-primary-500 
  bg-white-500 
  px-2 
  text-base 
  text-gray-700 
  shadow-sm 
  dark:bg-gray-600 
  dark:text-white-700 
  md:shadow-lg
`;

export const TimelineElementDownloadButton = tw(IconButton)`
  h-[2.1rem]
  w-[2.1rem]
  flex 
  flex-row 
  items-center 
  justify-center 
  rounded-md
  text-white-500
  dark:text-gray-700
  bg-primary-500
  dark:bg-primary-500
  hover:bg-primary-600
  hover:text-white-500
  hover:dark:text-gray-700
  hover:dark:bg-primary-600
  active:text-white-500
  active:dark:text-gray-700
`;