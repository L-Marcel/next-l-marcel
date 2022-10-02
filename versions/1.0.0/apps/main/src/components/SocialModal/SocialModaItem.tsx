import { Button, ButtonProps, useToast } from "@chakra-ui/react";
import { boxShadow } from "../../theme/effects/shadow";
import { customToast } from "../CustomToast";

import SocialModalButtonIcon from "./SocialModalButtonIcon";
import SocialModalButtonText from "./SocialModalButtonText";

interface SocialModalButtonProps {
  link: string;
  media: string;
  type?: "link" | "copy";
};

const _ButtonProps: ButtonProps = {
  bg: "white",
  p: 0,
  ...boxShadow(true)
};

function SocialModalItem({ link, media, type = "link" }: SocialModalButtonProps) {
  const toast = useToast();

  function handleCopy() {
    navigator.clipboard.writeText(link).then(() => {
      const id = `clipboard-event`;
      if(!toast.isActive(id)){
        toast(customToast(id, "Chave copiada com sucesso!", "success"));
      };
    });
  };

  if(type === "copy") {
    return (
      <Button
        {..._ButtonProps}
        onClick={handleCopy}
      >
        <SocialModalButtonIcon name={media}/>
        <SocialModalButtonText>
          {link}
        </SocialModalButtonText>
      </Button>
    );
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button
        textTransform="capitalize"
        {..._ButtonProps}
      >
        <SocialModalButtonIcon name={media}/>
        <SocialModalButtonText>
          {media}
        </SocialModalButtonText>
      </Button>
    </a>
  );
};

export default SocialModalItem;