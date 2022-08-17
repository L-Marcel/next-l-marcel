import tw from "tw-tailwind";

export const MobileMenuContainer = tw.nav`
  fixed
  flex
  w-full
  md:hidden
  bg-primary-600 
  bottom-0 
  pb-[calc(60px+3rem)]
  z-[90]
  backdrop-blur-sm
  border-t-4
  border-t-white-700
  dark:border-t-gray-600
`;

export const MobileMenuSideBar = tw.aside`
  absolute
  right-0
  w-1/2
  border-t-[calc(60px+3rem)]
  border-t-primary-500
  border-l-[110px]
  border-l-transparent
`;

export const MobileMenuButtonsGroup = tw.menu`
  absolute
  top-[calc(-60px-3rem)]
  right-26
`;

export const MobileToggleThemeIconButton = tw.button`
  absolute
  top-[-1.4rem]
  left-[-1.2rem]
  z-40
  rounded-full
  bg-primary-500
  dark:bg-primary-500
  !text-gray-700
  border-4
  border-white-500
  dark:border-gray-700
  w-[2.4rem]
  h-[2.4rem]
  flex
  flex-row
  justify-center
  items-center
`;

export const MobileMenuMainButton = tw.button`
  absolute
  top-[-2.8rem]
  flex
  flex-row
  justify-center
  items-center
  rotate-180
  -scale-x-100
  w-[4.8rem]
  h-[4.8rem]
  rounded-full
  bg-primary-500
  dark:bg-primary-500
  !text-gray-700
  border-8
  border-white-500
  dark:border-gray-700
  text-xl
  pb-[1px]
`;