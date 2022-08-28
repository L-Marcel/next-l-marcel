import { useFilteredRepositories } from "../../../context/hooks/useFilteredRepositories";
import { usePagination } from "../../../context/hooks/usePagination";
import { MasonryGrid } from "../../MansoryGrid";
import { RepositoriesListItem } from "./RepositoriesListItem";


export function RepositoriesList() {
  const { page } = usePagination();
  const { filteredRepositories } = useFilteredRepositories();

  const baseIndex = page * 12;
  const repositoriesInPage = filteredRepositories.slice(baseIndex, baseIndex + 12);

  return (
    <MasonryGrid
      items={repositoriesInPage.map(repository => {
        return (
          <RepositoriesListItem key={repository.id} repository={repository}/>
        );
      })}
    />
  );
}