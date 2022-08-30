import { useRouter } from "../../../context/hooks/useRouter";
import { Repository } from "../../../services/Github";
import { IconButton } from "../../Button/IconButton";
import { Icon, IconType } from "../../Icon";
import { ListItemBackgroundIcon, RepositoriesListItemContainer } from "./styles";

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
    fork,
    license,
    template,
    importedConfig,
    _filtered
  } = repository;

  function getTranslatedText(text: string, isNotPtBr: boolean) {
    if(isNotPtBr) {
      return text;
    }

    switch(text) {
    case "licensed":
      return "licenciado";
    case "documentation":
      return "documentação";
    case "Repository":
      return "Repositório";
    default:
      return text;
    }
  }

  const links = importedConfig?.links;
  const linksInList = links? Object.entries(links):[];

  function handleOpenLink(link: string) {
    window.open(link, "__blank__");
  }

  return (
    <RepositoriesListItemContainer $filtered={_filtered}>
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-md">
        <ListItemBackgroundIcon 
          name={importedConfig?.icon.toLowerCase() as IconType} 
          withoutTooltip
        />
      </div>

      <div className="repository-list-item-title flex w-full flex-row justify-between gap-4">
        <h3 className="text-break-word relative z-10 whitespace-pre-wrap capitalize">{formattedName ?? fullname}</h3>
        { license && <Icon 
          name="license"
          label={getTranslatedText("licensed", isNotPtBr)}
          className="mt-[2px]"
          tooltipClassName="z-20 mt-[-10px]"
          tooltipContainerClassName="h-fit" 
        /> }
      </div>
      { description && <p className="relative z-10 text-[1.1rem] font-light leading-5">{description}</p> }

      <div className="z-10 flex flex-row flex-wrap items-center gap-2">
        {
          linksInList.length > 0 && linksInList.map(([key, value]) => {
            return (
              <IconButton 
                key={`${name}-${key}`}
                size="sm" 
                className="rounded-lg" 
                tooltipClassName="z-20 mt-[-10px]" 
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
          tooltipClassName="z-20 mt-[-10px]" 
          icon="github"
          onClick={() => handleOpenLink(github)}      
        />
        {
          linksInList.length <= 0? 
            <h4 className="z-10">{getTranslatedText("Repository", isNotPtBr)}</h4>:
            <h4 className="z-10 sm:hidden md:block">{getTranslatedText("Repository", isNotPtBr)}</h4>
        }
      </div>
    </RepositoriesListItemContainer>
  );
}