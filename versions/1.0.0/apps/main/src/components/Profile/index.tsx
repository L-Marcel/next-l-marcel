import { Avatar, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { boxShadow } from "../../theme/effects/shadow";

import Container from "../Container";

interface ProfileProps {
  isWideOrNormalVersion: boolean;
  username: string;
  fullname: string;
  name: string;
  avatar: string;
};

function Profile({ isWideOrNormalVersion, username, fullname, name, avatar }: ProfileProps) {
  return (
    <Container mb={15}>
      <HStack spacing={[3, 5]}>
        <Avatar
          name={fullname} 
          size={ isWideOrNormalVersion? "lg":"md" } 
          borderWidth={2}
          borderStyle="solid"
          borderColor="primary.500"
          src={avatar}
          { ...boxShadow() }
        />
        <VStack spacing={0.1} alignItems="flex-start">
          <Heading
            fontSize={[20, 24]}
            color="primary.500"
            lineHeight={1}
          >
            {name}
          </Heading>
          { isWideOrNormalVersion && <Text
            fontSize={[14, 16]}
            color="black"
          >
            {fullname}
          </Text> }
          <Text
            fontSize={[12, 14]}
            color="primary.500"
          >
            @{username}
          </Text>
        </VStack>
      </HStack>
    </Container>
  );
};

export default Profile;