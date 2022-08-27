import { useFilteredRepositories } from "../../../context/hooks/useFilteredRepositories";
import { RepositoriesListContainer } from "./styles";

export function RepositoriesList() {
  const { filteredRepositories } = useFilteredRepositories();
  
  return (
    <RepositoriesListContainer>
      {(filteredRepositories && filteredRepositories.length > 0) &&
        filteredRepositories.map(repository => {
          return (
            <li key={repository.id}>{repository.formattedName ?? repository.name}</li>
          );
        })
      }
    </RepositoriesListContainer>
  );
}