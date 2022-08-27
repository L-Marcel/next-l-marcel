import { MasonryGrid } from "@egjs/react-grid";
import { useFilteredRepositories } from "../../../context/hooks/useFilteredRepositories";
import { usePagination } from "../../../context/hooks/usePagination";
import { RepositoriesListItem } from "./RepositoriesListItem";

export function RepositoriesList() {
  const { page } = usePagination();
  const { filteredRepositories } = useFilteredRepositories();

  const baseIndex = page * 12;
  const repositoriesInPage = filteredRepositories.slice(baseIndex, baseIndex + 12);

  return (
    <MasonryGrid
      className="w-full"
      gap={12}
      defaultDirection="end"
      align="justify"
    >
      {(repositoriesInPage && repositoriesInPage.length > 0) &&
        repositoriesInPage.map(repository => {
          return (
            <RepositoriesListItem
              key={repository.id}
              repository={repository}
            />
          );
        })
      }
    </MasonryGrid>
  );
}