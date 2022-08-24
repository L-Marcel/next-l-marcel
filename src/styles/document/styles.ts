import tw from "tw-tailwind";

export const PageBody = tw.body`
  relative
  scrollbar-thin 
  scrollbar-track-white-700 
  scrollbar-thumb-primary-500 
  dark:scrollbar-track-gray-600
  hover:scrollbar-thumb-primary-600
  mb-[40px]
  md:mb-0
`;

export const Layout = tw.main`
  relative
  flex
  flex-col
  justify-between
  min-h-[calc(100vh-3.1rem)]
  md:min-h-[calc(100vh-2.8125rem)]
`;