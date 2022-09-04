import { useRouter } from "../../../context/hooks/useRouter";
import { Repository } from "../../../services/Github";
import { IconButton } from "../../Button/IconButton";
import { Icon, IconType } from "../../Icon";
import { RepositoriesListBadge, RepositoriesListDescription, RepositoriesListHeaderContainer, RepositoriesListHeaderIconContainer, RepositoriesListHeaderTitle, RepositoriesListItemBackgroundIcon, RepositoriesListItemContainer } from "./styles";

interface RepositoriesListItemProps {
  repository: Repository;
  loading?: string;
}

export function RepositoriesListItem({
  repository
}: RepositoriesListItemProps) {
  const { isNotPtBr } = useRouter();

  const {
    fullname,
    formattedName,
    description,
    github,
    name,
    badge,
    fork: isFork,
    license: haveLicense,
    template: isTemplate,
    importedConfig,
    _filtered: isFiltered
  } = repository;

  function getTranslatedText(text: string, isNotPtBr: boolean) {
    if(isNotPtBr) {
      switch(text) {
      case "self":
        return "visit";
      case "flash":
        return "highlighted";
      default:
        return text;
      }
    }

    switch(text) {
    case "licensed":
      return "licenciado";
    case "documentation":
      return "documentação";
    case "fork":
      return "bifurcação";
    case "template":
      return "modelo";
    case "flash":
      return "destaque";
    case "Repository":
      return "Repositório";
    case "self":
      return "visitar";
    default:
      return text;
    }
  }

  const links = importedConfig?.links;
  const linksInList = links? Object.entries(links):[];
  const isPinned = importedConfig? importedConfig.pinned ?? false:false;

  const iconName =              
  isPinned? "flash":
    isFork? "fork":
      isTemplate? "template":
        "license";

  function handleOpenLink(link: string) {
    window.open(link, "__blank__");
  }

  return (
    <RepositoriesListItemContainer $filtered={isFiltered}>
      <span className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-md">
        <RepositoriesListItemBackgroundIcon 
          name={importedConfig?.icon.toLowerCase() as IconType} 
          withoutTooltip
        />
      </span>

      <RepositoriesListHeaderContainer>
        <RepositoriesListHeaderTitle>
          {formattedName ?? fullname}
        </RepositoriesListHeaderTitle>
        <RepositoriesListHeaderIconContainer>
          { (isPinned || isFork || isTemplate || haveLicense) && <Icon 
            name={iconName}
            label={getTranslatedText(iconName, isNotPtBr)}
            tooltipClassName="z-20 mt-[-10px]"
            tooltipContainerClassName="h-fit" 
          /> }
        </RepositoriesListHeaderIconContainer>
      </RepositoriesListHeaderContainer>
      { badge && <RepositoriesListBadge>{badge}</RepositoriesListBadge> }
      { description && <RepositoriesListDescription>{description}</RepositoriesListDescription> }

      <footer className="z-20 mt-1 flex flex-col">
        <div className="z-10 flex flex-row flex-wrap items-center gap-2">
          {
            linksInList.length > 0 && linksInList.map(([key, value]) => {
              return (
                <IconButton 
                  key={`${name}-${key}`}
                  size="sm" 
                  className="rounded-lg" 
                  tooltipClassName="z-10 mt-[-10px]" 
                  icon={key as IconType}
                  title={getTranslatedText(key, isNotPtBr)}
                  onClick={() => handleOpenLink(value)}
                />
              );
            })
          }
          <IconButton 
            size="sm" 
            className="rounded-lg" 
            tooltipClassName="z-10 mt-[-10px]" 
            icon="github"
            onClick={() => handleOpenLink(github)}      
          />
          {
            linksInList.length <= 0? 
              <h4 className="z-10">{getTranslatedText("Repository", isNotPtBr)}</h4>:
              <h4 className="z-10 sm:hidden md:block">{getTranslatedText("Repository", isNotPtBr)}</h4>
          }
        </div>
      </footer>
    </RepositoriesListItemContainer>
  );
}

/*
  <div className="mt-3 flex h-2 w-full flex-row gap-[3px] overflow-hidden rounded-md bg-white-600 shadow-inner dark:bg-gray-700">
    <span className="repository-list-item-group h-full w-[5%] bg-gray-600 dark:bg-white-600"></span>
    <span className="repository-list-item-group h-full w-[5%] bg-gray-600 dark:bg-white-600"></span>
    <span className="repository-list-item-group h-full w-[5%] bg-gray-600 dark:bg-white-600"></span>
    <span className="repository-list-item-group h-full w-[5%] bg-gray-600 dark:bg-white-600"></span>

    <span className="repository-list-item-group h-full w-[5%] bg-gray-600 dark:bg-white-600"></span>
    <span className="repository-list-item-group h-full w-[5%] bg-gray-600 dark:bg-white-600"></span>
    <span className="repository-list-item-group h-full w-[5%] bg-gray-600 dark:bg-white-600"></span>
    <span className="repository-list-item-group h-full w-[5%] bg-gray-600 dark:bg-white-600"></span>

    <span className="repository-list-item-group h-full w-[5%] bg-gray-600 dark:bg-white-600"></span>
    <span className="repository-list-item-group h-full w-[5%] bg-gray-600 dark:bg-white-600"></span>
    <span className="repository-list-item-group h-full w-[5%] bg-gray-600 dark:bg-white-600"></span>
    <span className="repository-list-item-group h-full w-[5%] bg-gray-600 dark:bg-white-600"></span>
  </div>
*/