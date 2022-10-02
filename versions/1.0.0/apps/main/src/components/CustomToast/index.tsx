import { BoxProps, Heading, HStack, StackProps, UseToastOptions } from "@chakra-ui/react";

import { bg } from "../../theme/effects/bg";

import Icon from "../Icon";

type CustomToastTypeOptions = "success" | "info" | "error";

interface CustomToastProps extends BoxProps {
  title: string;
  type: CustomToastTypeOptions;
};

const toastTypesProps = {
  "success": {
    color: "green.500",
    bg: "green.100"
  } as StackProps,
  "info": {
    color: "primary.500",
    bg: "primary.100"
  } as StackProps,
  "error": {
    color: "red.500",
    bg: "red.100"
  } as StackProps,
};

function CustomToast({ title, type, ...rest }: CustomToastProps) {
  return (
    <HStack
      {...bg({ 
        borderRadius: 8, 
        borderLeftWidth: 4, 
        bg: toastTypesProps[type].bg,
        opacity: 0.94
      }) as any}
      p={4}
      mr={3}
      color={toastTypesProps[type].color}
      {...rest}
    >
      <Icon h={25} w={25} name={type}/>
      <Heading
        fontSize={[16, 18]}
      >
        {title}
      </Heading>
    </HStack>
  );
};

export const customToast = (
  id: string, 
  title: string, 
  type: CustomToastTypeOptions = "info", 
  isWideOrNormalVersion = true
) => {
  return {
    id,
    position: isWideOrNormalVersion? "top-end":"bottom-end",
    duration: 3000,
    isClosable: true,
    render: () => {
      return (
        <CustomToast title={title} type={type}/>
      );
    }
  } as UseToastOptions;
};

export default CustomToast;