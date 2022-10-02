import { Badge, Heading, HStack, Text, useDisclosure } from "@chakra-ui/react";
import Container from "../Container";
import Icon from "../Icon";
import RepositoryModal from "../RepositoryModal";

interface RepositoryItemProps {
  repo: Repository;
};

function RepositoryItem({ repo }: RepositoryItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <RepositoryModal
        isOpen={isOpen}
        onClose={onClose}
        repo={repo}
      />
      <Container
        w="100%"
        mb={0}
        h="min-content"
        textTransform="capitalize"
        display="flex"
        flexDir="column"
        hoverEffect
        cursorPointer
        onClick={onOpen}
      >
        { repo.importedConfig.pinned && <Icon
          name="flash"
          position="absolute"
          color="primary.500"
          w={5}
          h={5}
          top={5}
          right={5}
        />}
        <Heading
          fontSize={[14, 16]}
          lineHeight={[5, 6]}
          color="primary.500"
        >
          {repo.formattedName}
        </Heading>
        { repo.badge && <Badge
          fontSize={10}
          lineHeight={2}
          bgColor="primary.500" 
          color="white"
          w="min-content"
          my={2}
        >
          {repo.badge}
        </Badge> }
        <Text 
          textTransform="none"
          fontSize={14}
          maxW="90%"
        >
          {repo.description?.slice(0, 156)}{repo.description?.length > 156 && "..."}
        </Text>
        <HStack mt={2} color="primary.500">
          <Icon name={repo.importedConfig.technologies[0]} w={6} h={6}/>
          <Text fontSize={[12, 15]}>{'->'} {repo.importedConfig.technologies[0] ?? "Desconhecido"}</Text>
        </HStack>
      </Container>
    </>
  );
};

export default RepositoryItem;