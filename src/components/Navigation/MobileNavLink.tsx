import Link from "next/link";
import { useRouter } from "next/router";
import { Icon, IconType } from "../Icon";
import { getTranslatedRouteName } from "./NavLink";
import { MobileNavLinkIconContainer, MobileNavLinkListItemContainer } from "./styles";

interface MobileNavLinkProps {
  locale?: string;
  name: string;
  path: string;
  liClassName?: string;
}

export function MobileNavLink({
  name,
  path,
  locale,
  liClassName
}: MobileNavLinkProps) {
  const router = useRouter();
  const isActive = 
    (locale && router.locale?.toLowerCase().includes(name)) ||
    (!locale && router.asPath.replace(/\/en-us/, "/") === path);

  const isNotPtBr = router.locale === "en-us";

  return (
    <MobileNavLinkListItemContainer selected={isActive} className={liClassName}>
      <Link href={path} locale={locale}>
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

function getRouteDescription(name: string, isNotPtBr  = false) {
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