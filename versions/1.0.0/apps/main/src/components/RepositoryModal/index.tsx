import { Badge, Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import Icon from "../Icon";
import Modal from "../Modal";
import RepositoryModalButtonsGroup from "./RepositoryModalButtonsGroup";
import RepositoryModalLinkButton from "./RepositoryModalLinkButton";

interface RepositoryProps {
  onClose: () => void;
  isOpen: boolean;
  repo: Repository;
};

function RepositoryModal({ isOpen, onClose, repo }: RepositoryProps) {
  const isWideOrNormalVersion = useBreakpointValue({
    lg: true,
    base: false
  });
  
  return (
    <Modal
      borderRadius={8}
      isOpen={isOpen} 
      onClose={onClose}
      position="relative"
      bgColor="primary.100"
      minW="min-content"
      h="min-content"
      m={4}
      p={[5, 10]}
    >
      <Box>
        <Heading
          maxWidth="80%"
          fontSize={[18, 25]}
          color="primary.500"
          textTransform="capitalize"
        >
          {repo.formattedName}
        </Heading>
        { repo.badge && <Badge
          fontSize={[10, 12]} 
          lineHeight={[2, 6]}
          px={2}
          bgColor="primary.500" 
          color="white"
          w="min-content"
          my={2}
        >
          {repo.badge}
        </Badge> }
        { repo.importedConfig?.technologies && <Box
          flexWrap="wrap"
          display="flex"
          maxW="90%"
        >
          {
            repo.importedConfig?.technologies?.map(technology => {
              return (
                <Icon key={technology} color="primary.500" mr={2} mt={2} name={technology} w={6} h={6}/>
              );
            })
          }
        </Box> }
        { repo.description && <Text
          mt={4}
        >
          {repo.description}
        </Text> }
        <RepositoryModalButtonsGroup isWideOrNormalVersion={isWideOrNormalVersion}>
          { repo.github && <RepositoryModalLinkButton
            link={repo.github} 
            title="Repositório" icon="github"
          /> }
          { repo.importedConfig.links?.figma && <RepositoryModalLinkButton
            link={repo.importedConfig.links?.figma} 
            title="Figma" icon="figma"
          /> }
          { repo.importedConfig.links?.self && <RepositoryModalLinkButton
            link={repo.importedConfig.links?.self} 
            title="Visitar" icon="self"
          /> }
          { repo.importedConfig.links?.documentation && <RepositoryModalLinkButton
            link={repo.importedConfig.links?.documentation} 
            title="Documentação" 
            icon="documentation"
          /> }
        </RepositoryModalButtonsGroup>
        { repo.license && <Text 
          mt={5}
          display="flex"
          alignItems="center"
          color="primary.500"
        >
          <Icon name="license" mr={2} fontSize={22}/>
          {repo.license}
        </Text> }
      </Box>
    </Modal>
  );
};

export default RepositoryModal;