import tw from "tw-tailwind";
import { Icon } from "../../Icon";

export const RepositoriesListItemContainer = tw.div`
  absolute 
  w-full
  group
  sm:w-[calc(49%-6px)] 
  md:w-[calc(33%-6px)]
  text-gray-600
  dark:text-white-600
  px-4
  py-3
  bg-white-500
  dark:bg-gray-500
  rounded-md
  overflow-hidden
`;

export const ListItemBackgroundIcon = tw(Icon)`
  absolute
  right-[-12px]
  bottom-[-12px]
  !text-[5rem]
  text-white-700
  dark:text-gray-400
  !drop-shadow-none
  z-0
  group-hover:dark:!text-primary-600
`;