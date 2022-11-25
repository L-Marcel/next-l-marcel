import Link from "next/link";
import { useRouter } from "../../context/hooks/useRouter";
import { Button } from "../Button";

interface NavLinkProps {
  locale?: string;
  name: string;
  path: string;
  liClassName?: string;
  dynamic?: boolean;
}

export function NavLink({
  name,
  path,
  locale,
  liClassName,
  dynamic = false
}: NavLinkProps) {
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
    <li className={liClassName}>
      <Link className="full-link" href={path} locale={locale}>
        <Button 
          selected={isActive}
          tabIndex={-1}
        >
          {isNotPtBr? name:getTranslatedRouteName(name)}
        </Button>
      </Link>
    </li>
  );
}

export function getTranslatedRouteName(name: string) {
  switch(name) {
  case "resume":
    return "currículo";
  case "projects":
    return "projetos";
  case "achievements":
    return "conquistas";
  default:
    return name;
  }
}