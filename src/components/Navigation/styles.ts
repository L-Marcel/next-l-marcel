import tw from "tw-tailwind";

export interface MobileNavLinkListItemContainerProps {
  selected: boolean;
}


export interface MobileNavLinkIconContainerProps {
  selected: boolean;
}

export const MobileNavLinkListItemContainer = tw.li<MobileNavLinkListItemContainerProps>`
  p-3
  rounded-2xl
  ${props => props.selected? "bg-primary-500-30":""}
`;

export const MobileNavLinkIconContainer = tw.div<MobileNavLinkIconContainerProps>`
  rounded-xl
  bg-white-600 
  dark:bg-gray-600 
  p-3
  ${props => props.selected? "!bg-primary-600 text-gray-600":""}
`;