import { Text } from "@chakra-ui/react";
import useFilteredRepositories from "../../hooks/useFilteredRepositories";
import useRepositories from "../../hooks/useRepositories";

function RepositoriesCount() {
  const { repositories } = useRepositories();
  const { filteredRepositories } = useFilteredRepositories();

  return (
    <Text
      display={["none", "flex"]}
      w="max-content" h="100%"
      alignSelf="center"
      mr={3}
      ml={2}
      fontWeight="light"
    >
      {`${filteredRepositories.length}/${repositories.length} repositórios`}
    </Text>
  );
};

export default RepositoriesCount;