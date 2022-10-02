import { IconButtonProps, IconButton, useToast } from "@chakra-ui/react";
import Icon from "../Icon";

import { customToast } from "../CustomToast";

interface CopyButtonProps extends IconButtonProps {
  textToCopy: string;
};

function CopyButton({ textToCopy, ...rest }: CopyButtonProps) {
  const toast = useToast();

  function handleCopy() {
    navigator.clipboard.writeText(textToCopy).then(() => {
      const id = `clipboard-event`;
      if(!toast.isActive(id)){
        toast(customToast(id, "Chave copiada com sucesso!", "success"));
      };
    });
  };

  return (
    <IconButton 
      aria-label="copy-button"
      icon={<Icon name="copy"/>} 
      color="primary.500"
      onClick={handleCopy}
      m={0}
      p={0}
      h="min-content"
      w="min-content"
      minW="min-content"
      ml={2}
      {...rest}
    />
  );
};

export default CopyButton;