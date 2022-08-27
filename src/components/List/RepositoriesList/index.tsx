import { Masonry } from "masonic";
import { useFilteredRepositories } from "../../../context/hooks/useFilteredRepositories";
import { usePagination } from "../../../context/hooks/usePagination";
import { useRouter } from "../../../context/hooks/useRouter";
import { RepositoriesListItem } from "./RepositoriesListItem";
import { ListItemBackgroundIcon, RepositoriesListItemContainer } from "./styles";


export function RepositoriesList() {
  const { isNotPtBr } = useRouter();
  const { page } = usePagination();
  const { filteredRepositories } = useFilteredRepositories();

  const baseIndex = page * 12;
  const repositoriesInPage = filteredRepositories.slice(baseIndex, baseIndex + 12);

  const list = new Array(12).fill({});

  for(const r in repositoriesInPage) {
    list[r] = repositoriesInPage[r];
  }

  return (
    <Masonry
      columnWidth={360}
      columnGutter={12}
      overscanBy={12}
      items={list}
      render={({ index, data, width }) => {
        if(data.id) {
          return (<RepositoriesListItem
            key={data.id}
            width={width}
            repository={data}
          />);
        } else {
          return (<RepositoriesListItemContainer  key={index + "comming"} _filtered={false}>
            <ListItemBackgroundIcon 
              name="default" 
              withoutTooltip
            />
            <h3 className="relative z-10">{isNotPtBr? "Comming soon":"Em breve"}</h3>
          </RepositoriesListItemContainer>);
        }
      }}
    />
  );
}