import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const isActive = 
    (locale && router.locale?.toLowerCase().includes(name)) ||
    (!locale && router.asPath.replace(/\/en-us/, "/") === path);

  const isNotPtBr = router.locale === "en-us";

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

function getTranslatedRouteName(name: string) {
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