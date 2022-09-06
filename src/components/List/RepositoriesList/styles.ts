import tw from "tw-tailwind";
import { Icon } from "../../Icon";

interface RepositoriesListItemContainerProps {
  $filtered: boolean;
}

export const RepositoriesListItemContainer = tw.article<RepositoriesListItemContainerProps>`
  relative
  w-full
  text-gray-600
  dark:text-white-600
  p-4
  bg-white-500
  dark:bg-gray-500
  gap-1
  rounded-md
  flex
  flex-col
  repository-list-item
  cursor-pointer
  ${props => props.$filtered? "opacity-100":"opacity-20"}
`;

export const RepositoriesListItemBackgroundIcon = tw(Icon)`
  absolute
  right-[-12px]
  bottom-[-12px]
  !text-[5rem]
  text-white-700
  dark:text-gray-400
  !drop-shadow-none
  z-0
  repository-list-item-tech
`;

export const RepositoriesListItemHeaderContainer = tw.header`
  repository-list-item-title 
  flex 
  w-full 
  flex-row 
  justify-between 
  gap-4 
  pr-8
`;

export const RepositoriesListItemHeaderIconContainer = tw.div`
  absolute 
  top-2 
  right-2 
  z-30
  mt-[-0.25rem] 
  mr-[-0.25rem] 
  flex 
  rounded-full 
  bg-white-500 
  p-2 
  dark:bg-gray-500
`;

export const RepositoriesListItemHeaderTitle = tw.h3`
  text-break-word
  relative 
  z-10 
  mt-[-4px] 
  whitespace-pre-wrap 
  capitalize 
  leading-6
  md:leading-7
`; 

export const RepositoriesListItemBadge = tw.p`
  relative
  z-10
  my-1
  w-fit
  rounded-md
  bg-white-600
  dark:bg-gray-400
  px-[0.4rem]
  pt-[0.15rem]
  pb-[0.3rem]
  text-[1rem]
  font-light
  lowercase
  italic
  leading-4
`;

export const RepositoriesListItemDescription = tw.p`
  relative 
  z-10 
  text-[1.1rem] 
  font-light 
  leading-5
  mb-1
`;

export const RepositoriesListItemProgressContainer = tw.div`
  mt-4
  flex
  h-2
  w-full
  flex-row
  gap-[3px]
  overflow-hidden
  rounded-md
  bg-white-600
  shadow-inner
  dark:bg-gray-700
`;

export interface RepositoriesListItemProgressItemProps {
  isActived: boolean;
}

export const RepositoriesListItemProgressItem = tw.div<RepositoriesListItemProgressItemProps>`
  h-full
  w-[5%]
  ${props => props.isActived? "bg-gray-600 dark:bg-white-600 repository-list-item-group":"bg-transparent"}
`;