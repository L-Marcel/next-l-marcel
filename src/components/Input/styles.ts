import tw from "tw-tailwind";

export const SearchButton = tw.button``;

export const SearchInput = tw.input`
  rounded-md
  px-2
  py-1
  text-gray-700
  dark:text-white-500
  bg-white-500
  dark:bg-gray-500
  ring-offset-[3px]
  dark:ring-offset-gray-700
  ring-offset-white-default
  focus:ring-2
  focus:ring-primary-500
  focus-visible:ring-2
  focus-visible:!text-gray-700
  focus-visible:dark:!text-white-500
  focus-visible:ring-primary-500
  focus-visible:!bg-white-500
  focus-visible:dark:!bg-gray-500
`;