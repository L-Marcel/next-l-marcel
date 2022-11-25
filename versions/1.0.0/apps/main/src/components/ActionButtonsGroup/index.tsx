import { ButtonGroup, useDisclosure } from "@chakra-ui/react";
import { boxShadow } from "../../theme/effects/shadow";

import dynamic from "next/dynamic";

import Button from "../Button";

import { CertificatesModalProps } from "../CertificatesModal";
import { SocialModalProps } from "../SocialModal";

interface ActionButtonsGroupProps {
  user: User;
}

const MusicButton = dynamic(() => 
  import("../Button/MusicButton").then(mod => mod.default), 
{
  loading: () => null,
  ssr: false
});

const CertificatesModal = dynamic<CertificatesModalProps>(() => 
  import("../CertificatesModal").then(mod => mod.default)
);

const SocialModal = dynamic<SocialModalProps>(() => 
  import("../SocialModal").then(mod => mod.default)
);

function ActionButtonsGroup({ user }: ActionButtonsGroupProps) {
  const { isOpen: socialIsOpen, onOpen: onOpenSocial, onClose: onCloseSocial } = useDisclosure();
  const { isOpen: certificatesIsOpen, onOpen: onOpenCertificates, onClose: onCloseCertificates } = useDisclosure();
  
  return (
    <>
      <SocialModal 
        isOpen={socialIsOpen} 
        onClose={onCloseSocial}
        socialLinks={user.links}
        cvLink={user.cv}
      />
      <CertificatesModal
        isOpen={certificatesIsOpen}
        onClose={onCloseCertificates}
        certificates={user.certificates}
      />
      <ButtonGroup 
        mx="auto"
        isAttached
        spacing={[0, 5]}
        mb={30}
        mt="-30px"
        zIndex={5}
        { ...boxShadow() }
      >
        <Button
          aria-label="share"
          icon="share"
          onClick={onOpenSocial}
        >
          Rede
        </Button>
        <Button 
          aria-label="certificates"
          icon="certificate"
          onClick={() => onOpenCertificates()}
        >
          Certificados
        </Button>
        <MusicButton
          aria-label="music-button"
        />
      </ButtonGroup>
    </>
  );
}

export default ActionButtonsGroup;