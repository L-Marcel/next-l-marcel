import { SimpleGrid } from "@chakra-ui/react";
import { useCallback } from "react";

import useFilteredRepositories from "../../hooks/useFilteredRepositories";

import BlankResult from "../BlankResult";
import RepositoryItem from "./RepositoryItem";

function RepositoriesList() {
  const { filteredRepositories } = useFilteredRepositories();
  const qtd = filteredRepositories.length;

  const onClickInItem = useCallback((repo: Repository) => {
    //
  }, []);

  if(qtd <= 0) {
    return (
      <BlankResult message="Nenhum repositório encontrado"/>
    );
  };

  return (
    <SimpleGrid
      columns={[1, 1, 2, 2, 2, 2]}
      spacing={10}
      maxW="100%"
    >
      {
        filteredRepositories.map(repo => {
          return (
            <RepositoryItem 
              key={repo.id} 
              repo={repo}
            />
          );
        })
      }
    </SimpleGrid>
  );
};

export default RepositoriesList;