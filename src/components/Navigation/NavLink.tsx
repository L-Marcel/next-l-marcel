import Link from "next/link";
import { useRouter } from "../../context/hooks/useRouter";
import { Button } from "../Button";

interface NavLinkProps {
  locale?: string;
  name: string;
  path: string;
  liClassName?: string;
}

export function NavLink({
  name,
  path,
  locale,
  liClassName
}: NavLinkProps) {
  const { isNotPtBr, ...router } = useRouter();
  const isActive = 
    (locale && router.locale?.toLowerCase().includes(name)) ||
    (!locale && router.asPath.replace(/\/en-us/, "/") === path);

  return (
    <li className={liClassName}>
      <Link href={path} locale={locale}>
        <Button 
          selected={isActive}
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