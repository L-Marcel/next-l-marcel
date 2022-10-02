import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SocialModalButtonTextProps {
  children: ReactNode;
};

function SocialModalButtonText({ children }: SocialModalButtonTextProps) {
  return (
    <Box
      display="flex"
      h="100%"
      w="max-content"
      justifyContent="center"
      alignItems="center"
      borderRightRadius={6}
      px={4}
    >
      <Text>{children}</Text>
    </Box>
  );
};

export default SocialModalButtonText;