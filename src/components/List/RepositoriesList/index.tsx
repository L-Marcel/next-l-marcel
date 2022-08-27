import { Masonry } from "masonic";
import { useFilteredRepositories } from "../../../context/hooks/useFilteredRepositories";
import { RepositoriesListItem } from "./RepositoriesListItem";


export function RepositoriesList() {
  const { filteredRepositories } = useFilteredRepositories();

  return (
    <Masonry
      columnWidth={360}
      columnGutter={12}
      overscanBy={16}
      items={filteredRepositories}
      render={({ index, data, width }) => (<RepositoriesListItem
        key={index}
        width={width}
        repository={data}
      />)}
    />
  );
}