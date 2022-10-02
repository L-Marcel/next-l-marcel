import { ButtonGroup, ButtonGroupProps, Stack } from "@chakra-ui/react";
import { boxShadow } from "../../theme/effects/shadow";

interface RepositoryModalButtonsGroupProps {
  isWideOrNormalVersion?: boolean;
  children: JSX.Element[];
};

const buttonGroupProps: ButtonGroupProps = {
  spacing: [0, 5],
  zIndex: 5,
  isAttached: true,
  ...boxShadow()
};

function RepositoryModalButtonsGroup({ children, isWideOrNormalVersion = true }: RepositoryModalButtonsGroupProps) {
  const firstChildrens = children.slice(0, 2);
  const lastChildrens = children.slice(2, 4);

  if(isWideOrNormalVersion) {
    return (
      <ButtonGroup mx="auto" mt={5} {...buttonGroupProps}>
        {children}
      </ButtonGroup>
    );
  };

  return (
    <Stack mx="auto" mt={5} spacing={2}>
      <ButtonGroup {...buttonGroupProps}>
        {firstChildrens}
      </ButtonGroup>
      <ButtonGroup {...buttonGroupProps}>
        {lastChildrens}
      </ButtonGroup>
    </Stack>
  );
};

export default RepositoryModalButtonsGroup;