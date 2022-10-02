import { Modal as ChakraModal, ModalBody, ModalContent, ModalContentProps, ModalOverlay } from "@chakra-ui/react";
import { ReactNode } from "react";
import CloseButton from "../Button/CloseButton";

interface SocialModalProps extends ModalContentProps {
  onClose: () => void,
  isOpen: boolean,
  children?: ReactNode,
};

function Modal({ isOpen, onClose, children, ...rest }: SocialModalProps) {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent 
        bgImage="/background.png"
        {...rest} 
        my={[null, "auto"]}
      >
        <CloseButton onClick={onClose}/>
        <ModalBody p={0} my="auto">
          { children}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;