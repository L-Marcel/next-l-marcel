import { tw } from "../../services/tw";

export const H1Container = tw.h1`
  px-16
`;

export const PContainer = tw.p`
  px-16
`;

export const PreContainer = tw.pre`
  mx-16
  w-[calc(100% - 8rem)]
  bg-white-600
  px-5
  py-[0.875rem]
  rounded-[15px]
  dark:bg-gray-500
`;

export const DivContainer = tw.div`
  py-8
  bg-white-600
  dark:bg-gray-600
  first-of-type:with-description
`;