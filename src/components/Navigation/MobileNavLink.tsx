import Link from "next/link";
import { useRouter } from "../../context/hooks/useRouter";
import { Icon, IconType } from "../Icon";
import { getTranslatedRouteName } from "./NavLink";
import { MobileNavLinkIconContainer, MobileNavLinkListItemContainer } from "./styles";

interface MobileNavLinkProps {
  locale?: string;
  name: string;
  path: string;
  liClassName?: string;
  dynamic?: boolean;
}

export function MobileNavLink({
  name,
  path,
  locale,
  liClassName,
  dynamic = false
}: MobileNavLinkProps) {
  const { isNotPtBr, ...router } = useRouter();

  const isActive = 
    (locale && router.locale?.toLowerCase().includes(name)) ||
    (!locale && dynamic && router.asPath.replace(/\/en-us/, "/").startsWith(path)) || 
    (!locale && router.asPath.replace(/\/en-us/, "/") === path);

  if(locale === "pt-br") {
    path = router.asPath;
  } else if(locale) {
    path = router.asPath.replace(/\/en-us/, "/");
  }

    
  return (
    <MobileNavLinkListItemContainer selected={isActive} className={liClassName}>
      <Link className="no-underline" href={path} locale={locale}>
        <div className="flex flex-row gap-4">
          <MobileNavLinkIconContainer selected={isActive}>
            <Icon
              name={name as IconType}
              className="text-4xl !transition-none"
              withoutTooltip
            />
          </MobileNavLinkIconContainer>
          <div className="flex flex-col justify-center">
            <h3 className="first-letter:uppercase">{isNotPtBr? name:getTranslatedRouteName(name)}</h3>
            <p className="text-base italic">{getRouteDescription(name, isNotPtBr)}</p>
          </div>
        </div>
      </Link>
    </MobileNavLinkListItemContainer>
  );
}

function getRouteDescription(name: string, isNotPtBr = false) {
  switch(name) {
  case "resume":
    return isNotPtBr? "information about me":"informações sobre mim";
  case "projects":
    return isNotPtBr? "my public repositories":"meus repositórios públicos";
  case "achievements":
    return isNotPtBr? "everything I've done so far":"tudo que fiz até agora";
  default:
    return name;
  }
}