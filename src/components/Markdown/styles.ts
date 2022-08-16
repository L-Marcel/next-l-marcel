import tw from "tw-tailwind";

export const MarkdownH1Container = tw.h1`
  px-16
`;

export const MarkdownPContainer = tw.p`
  px-16
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
  mx-16
  w-[calc(100% - 8rem)]
  bg-white-600
  px-5
  py-[0.875rem]
  rounded-[15px]
  dark:bg-gray-500
`;

export interface MarkdownDivContainerProps {
  isHighlight: boolean;
}

export const MarkdownDivContainer = tw.div<MarkdownDivContainerProps>`
  py-8
  ${props => props.isHighlight? 
    "bg-primary-500 force-white-text text-4xl":
    "bg-white-600 dark:bg-gray-600"}
  markdown-section-container
  first-of-type:with-description
`;