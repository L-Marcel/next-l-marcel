import { Heading } from "@chakra-ui/react";
import Container from "../Container";
import Icon from "../Icon";

interface BlankResultProps {
  message: string;
};

function BlankResult({ message }: BlankResultProps) {
  return (
    <Container
      mb={0}
      h="min-content"
      display="flex"
      hoverEffect
    >
      <Icon 
        name="info" 
        h={30} 
        w={30}
        color="primary.500"
      />
      <Heading
        ml={2}
        fontSize={[14, 16]}
        lineHeight={[5, 6]}
        color="primary.500"
        my="auto"
      >
        {message}
      </Heading>
    </Container>
  );
};

export default BlankResult;