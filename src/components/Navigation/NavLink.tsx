import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../Button";

interface NavLinkProps {
  locale?: string;
  name: string;
  path: string;
}

export function NavLink({
  name,
  path,
  locale
}: NavLinkProps) {
  const router = useRouter();
  const isActive = 
    (locale && router.locale?.toLowerCase().includes(name)) ||
    (!locale && router.asPath.replace(/\/en-us/, "/") === path);

  return (
    <li
      className="nav-link"
    >
      <Link href={path} locale={locale}>
        <Button 
          actived={isActive}
        >
          {name}
        </Button>
      </Link>
    </li>
  );
}