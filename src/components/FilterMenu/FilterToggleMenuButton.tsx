import { HTMLAttributes } from "react";
import { useMenuIsOpen } from "../../context/hooks/useMenuIsOpen";
import { useRouter } from "../../context/hooks/useRouter";
import { Button } from "../Button";

export function FilterToggleMenuButton({
  className,
  ...rest
}: HTMLAttributes<HTMLButtonElement>) {
  const { isNotPtBr } = useRouter();
  const { toggleMenu } = useMenuIsOpen();

  return (
    <Button
      onClick={toggleMenu}
      className={"!px-4 " + className}
      {...rest}
    >
      {isNotPtBr? "filter":"filtro"}
    </Button>
  );
}