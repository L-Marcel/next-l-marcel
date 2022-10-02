
import { ButtonProps } from "@chakra-ui/react";
import Button from "../Button";

interface RepositoryModalLinkButtonProps extends ButtonProps {
  link: string;
  title: string;
  icon: string;
};

function RepositoryModalLinkButton({
  link,
  title,
  icon,
  ...rest
}: RepositoryModalLinkButtonProps) {
  return (
    <Button
      aria-label="share"
      icon={icon}
      link={link}
      {...rest}
    >
      {title}
    </Button>
  );
};

export default RepositoryModalLinkButton;