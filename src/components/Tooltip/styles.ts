import tw from "tw-tailwind";

export const TooltipContainer = tw.label`
  relative
  tooltip-container
  cursor-normal
  md:cursor-help
`;

export const TooltipText = tw.p`
  hidden  
  md:block
  absolute
  !top-[calc(100%+1rem)]
  font-normal
  w-full
  text-center
`;

export const TooltipSpan = tw.span`
  !text-inherit
  bg-white-600
  dark:bg-gray-600
  px-2
  py-1
  rounded-md
  shadow-sm
  md:shadow-lg
  text-base
  border-x-primary-500
  border-x-2
  whitespace-nowrap
`;