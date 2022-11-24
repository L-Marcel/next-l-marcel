import tw from "tw-tailwind";

export const TooltipContainer = tw.label`
  relative
  tooltip-container
  cursor-normal
  md:cursor-help
`;

export const TooltipTextContainer = tw.div`
  hidden  
  md:flex
  flex-row
  flex-wrap
  absolute
  !top-[calc(100%+1rem)]
  font-normal
  max-w-[25rem]
  text-center
  tooltip-text-container
  px-2
  py-1
  border-x-primary-500
  border-x-2
  bg-white-500
  dark:bg-gray-600
  rounded-md
  shadow-sm
  md:shadow-lg
  overflow-hidden
`;

export const TooltipText = tw.p`
  text-base
  whitespace-nowrap
  overflow-hidden
  text-ellipsis
`;