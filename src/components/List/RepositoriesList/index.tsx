import { MasonryGrid } from "@egjs/react-grid";
import { useFilteredRepositories } from "../../../context/hooks/useFilteredRepositories";
import { RepositoriesListItem } from "./styles";

export function RepositoriesList() {
  const { filteredRepositories } = useFilteredRepositories();
  
  return (
    <MasonryGrid
      className="w-full"
      gap={12}
      defaultDirection="end"
      align="justify"
    >
      {(filteredRepositories && filteredRepositories.length > 0) &&
        filteredRepositories.map(repository => {
          return (
            <RepositoriesListItem
              key={repository.id}
            >
              {repository.formattedName ?? repository.name}
            </RepositoriesListItem>
          );
        })
      }
    </MasonryGrid>
  );
}