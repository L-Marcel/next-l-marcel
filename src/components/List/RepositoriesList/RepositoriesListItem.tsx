import { Repository } from "../../../services/Github";
import { IconType } from "../../Icon";
import { ListItemBackgroundIcon, RepositoriesListItemContainer } from "./styles";

interface RepositoriesListItemProps {
  repository: Repository;
  loading?: string;
}

export function RepositoriesListItem({
  repository
}: RepositoriesListItemProps) {
  const {
    fullname,
    formattedName,
    description,
    github,
    url,
    name,
    badge,
    fork,
    license,
    template,
    importedConfig
  } = repository;

  return (
    <RepositoriesListItemContainer>
      <ListItemBackgroundIcon 
        name={importedConfig?.icon.toLowerCase() as IconType} 
        withoutTooltip
      />
      <h3 className="relative z-10">{formattedName ?? fullname}</h3>
      <p className="relative z-10">{description}</p>
    </RepositoriesListItemContainer>
  );
}