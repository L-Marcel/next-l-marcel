import { Box, Image } from "@chakra-ui/react";
import { m } from "framer-motion";
import { fadeToTop } from "../theme/animations/motion";

function Profile() {
  return (
    <Box
      as={m.div}
      position="absolute"
      top={"-2px"}
      left={0}
      p={2}
      {...fadeToTop}
    >
      <Image
        as={m.img}
        borderRadius={999}
        src="https://avatars.githubusercontent.com/u/62476762?v=4"
        h={[30, 50]}
        w={[30, 50]}
        {...fadeToTop}
      />
    </Box>
  );
};

export { Profile };