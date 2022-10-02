import { Box } from "@chakra-ui/react";

function BackgroundImage() {
  return (
    <Box
      top={0}
      left={0}
      position="absolute"
      w="100vw"
      h="100vh"
      zIndex={-9999}
      bgImage={["/background_mobile.png", "/background.png"]}
      bgSize="cover"
    />
  );
};

export default BackgroundImage;