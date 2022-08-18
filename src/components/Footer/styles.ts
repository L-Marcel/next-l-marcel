import tw from "tw-tailwind";

export const FooterContainer = tw.footer`
  h-34
  flex
  w-full
  flex-row
  border-t-4
  border-t-primary-500
  pt-6
  pb-0
  md:pb-8
  md:h-28
  bg-notifications
`;

export const FooterNavigation = tw.nav`
  w-full
  px-12
  flex
  h-min
  md:px-16
  border-b-white-600
  dark:border-b-gray-600
  border-b-[2rem]
  md:border-b-[2rem]
`;