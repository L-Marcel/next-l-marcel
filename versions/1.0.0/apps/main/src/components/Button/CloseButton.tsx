import { IconButton } from "@chakra-ui/react";
import Icon from "../Icon";

import { boxShadow } from "../../theme/effects/shadow";

interface IconButtonProps {
  onClick: () => void;
};

function CloseButton({ onClick }: IconButtonProps) {
  return (
    <IconButton 
      position="absolute"
      right={[5, 6]}
      top={[5, 6]}
      w={[6, 38]}
      h={[6, 38]}
      minW={6}
      bg="primary.500"
      aria-label="close-button" 
      icon={<Icon name="close"/>} 
      color="white"
      {...boxShadow()}
      _hover={{
        color: "primary.500",
        bg: "primary.200"
      }}
      onClick={onClick}
    />
  );
};

export default CloseButton;