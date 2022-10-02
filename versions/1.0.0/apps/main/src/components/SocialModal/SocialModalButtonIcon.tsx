import { Box } from "@chakra-ui/react";
import Icon from "../Icon";

interface SocialModalButtonIconProps {
  name?: string;
};

function SocialModalButtonIcon({ name }: SocialModalButtonIconProps) {
  return (
    <Box
      display="flex"
      bg="primary.400"
      h="100%"
      justifyContent="center"
      alignItems="center"
      w={10}
      borderLeftRadius={5}
    >
      <Icon 
        h="80%" 
        color="white" 
        name={name}
      />
    </Box>
  );
};

export default SocialModalButtonIcon;