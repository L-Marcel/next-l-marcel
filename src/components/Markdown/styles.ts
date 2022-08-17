import tw from "tw-tailwind";

export const MarkdownH1Container = tw.h1`
  px-12  
  md:px-16
`;

export const MarkdownPContainer = tw.p`
  px-12  
  md:px-16
`;

export const MarkdownAContainer = tw.a``;

export const MarkdownNavContainer = tw.nav`
  flex
  flex-1
  flex-row 
  items-center 
  gap-x-2
  gap-y-2 
  text-xl
  flex-wrap
  mt-4
  text-primary-500
  markdown-navigation
`;

export const MarkdownBrContainer = tw.br`
  ignore-first-break
`;

export const MarkdownPreContainer = tw.pre`
  mx-12
  md:mx-16
  w-[calc(100% - 8rem)]
  bg-white-600
  px-5
  py-[0.875rem]
  rounded-[15px]
  dark:bg-gray-500
  scrollbar-thin 
  scrollbar-track-white-700 
  scrollbar-thumb-primary-500 
  dark:scrollbar-track-gray-500
  hover:scrollbar-thumb-primary-600
`;

export interface MarkdownDivContainerProps {
  $highlight: boolean;
}

export const MarkdownDivContainer = tw.div<MarkdownDivContainerProps>`
  py-8
  ${props => props.$highlight? 
    "bg-primary-500 force-white-text text-4xl":
    "bg-white-600 dark:bg-gray-600"}
  markdown-section-container
  first-of-type:with-description
`;

export const MarkdownListContainer = tw.ul`
  text-left
  list-container
`;

export const MarkdownListItemContainer = tw.li`
  text-lg
  2xl:text-xl
`;

export const MarkdownGridContainer = tw.div`
  py-8
  markdown-section-container
  first-of-type:with-description
  bg-white-600 dark:bg-gray-600
  flex
  gap-10
  md:gap-16
  flex-wrap
`;

export const MarkdownH2Container = tw.h2`
  px-12  
  md:px-16
`;