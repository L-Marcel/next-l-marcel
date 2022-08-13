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
    <li>
      <Link href={path} locale={locale}>
        <Button 
          selected={isActive}
          title={path}
        >
          {name}
        </Button>
      </Link>
    </li>
  );
}

//Novo: 64px - 16px - 4rem
//Rodando: 61,5px - 12px - 5,125rem

// 4rem = 16px
// 4rem = 12px