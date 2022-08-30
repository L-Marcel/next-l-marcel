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
  px-4
  py-3
  bg-white-500
  dark:bg-gray-500
  rounded-md
  flex
  flex-col
  gap-2
  repository-list-item
  ${props => props.$filtered? "opacity-100":"opacity-20"}
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
  repository-list-item-tech
  group-hover:dark:!text-primary-600
`;