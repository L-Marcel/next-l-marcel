import { MasonryGrid } from "@egjs/react-grid";
import { useFilteredRepositories } from "../../../context/hooks/useFilteredRepositories";

export function RepositoriesList() {
  const { filteredRepositories } = useFilteredRepositories();
  
  return (
    <MasonryGrid
      className="container"
      gap={5}
      defaultDirection="end"
      align="start"
    >
      {(filteredRepositories && filteredRepositories.length > 0) &&
        filteredRepositories.map(repository => {
          return (
            <div className="absolute w-full first-of-type:min-h-[10vh] sm:w-[38%] md:w-[33%]" key={repository.id}>{repository.formattedName ?? repository.name}</div>
          );
        })
      }
    </MasonryGrid>
  );
}