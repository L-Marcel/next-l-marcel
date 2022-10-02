import { HStack, Progress, Tooltip } from "@chakra-ui/react";

import { boxShadow } from "../../theme/effects/shadow";
import { getColorPointsBreakpoint } from "../../utils/getColorPointsBreakpoint";

import Icon from "../Icon";

interface ExperienceItemProps {
  name: string;
  progress?: number;
  message: string;
};

function ExperienceItem({ name, message, progress = 0 }: ExperienceItemProps) {
  if(progress < 10) {
    return null;
  };

  const color = getColorPointsBreakpoint(progress);

  return (
    <Tooltip 
      hasArrow 
      arrowSize={10}
      bg="primary.500"
      placement="top-end"
      label={`${name} -> ${message}`}
      { ...boxShadow() }
    >
      <HStack w="100%">
        <Icon 
          name={name}
          width={6} 
          height={6} 
          mr={1} 
          color={`${color}.500`}
        />
        <Progress 
          value={progress}
          className={`${color}-progressbar`}
          w="100%"
          size="sm"
          bg={["primary.300", "primary.200"]}
        />
      </HStack>
    </Tooltip>
  );
};

export default ExperienceItem;