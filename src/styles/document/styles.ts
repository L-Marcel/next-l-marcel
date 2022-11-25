import tw from "tw-tailwind";

export const PageBody = tw.body`
  relative
  scrollbar-thin 
  scrollbar-track-white-700 
  scrollbar-thumb-primary-500 
  dark:scrollbar-track-gray-600
  hover:scrollbar-thumb-primary-600
  mb-[40px]
  overflow-x-hidden
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

export interface FirstSectionProps {
  profile: boolean;
}

export const FirstSection = tw.section<FirstSectionProps>`
 ${props => !props.profile? "px-4 pt-[1.15rem] md:px-16 md:pb-12":""}
`;

export const DemoVideoContainer = tw.div`
  pr-12
  pl-0
  md:pr-16  
  md:pl-16
  markdown-section-container
  bg-white-500 dark:bg-gray-600
  flex
  relative
  overflow-hidden
  w-full
`;
