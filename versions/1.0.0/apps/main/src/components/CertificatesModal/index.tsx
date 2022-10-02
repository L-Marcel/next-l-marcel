import { Box, Heading, Tag, Text, VStack } from "@chakra-ui/react";
import { boxShadow } from "../../theme/effects/shadow";
import Button from "../Button";
import CopyButton from "../Button/CopyButton";
import Modal from "../Modal";

export interface CertificatesModalProps {
  onClose: () => void;
  isOpen: boolean;
  certificates: Certificate[];
};

function CertificatesModal({ isOpen, onClose, certificates }: CertificatesModalProps) {
  return (
    <Modal
      borderRadius={8}
      isOpen={isOpen} 
      onClose={onClose}
      minH="auto"
      position="relative"
      bgColor="primary.100"
      m={4}
    >
      <VStack
        borderTopRadius={6}
        borderBottomRadius={6}
        minH="max-content"
        bgRepeat="no-repeat"
        alignItems="flex-start"
        spacing={4}
        p={[5, 6]}
        bgSize="cover"
      >
        {
          certificates.map(c => {
            return (
              <Box
                key={`${c.code}|${c.name}`}
                display="inline-flex"
                alignItems="flex-start"
                flexDir="column"
                fontWeight="normal"
                fontSize={[14]}
              >
                <Heading
                  color="primary.500"
                  fontSize={[18, 20, 22]}
                  fontWeight="bold"
                >
                  {c.name}
                </Heading>
                <Text fontSize={[16]}>
                  Emissora: {c.issuingOrganization}
                </Text>
                { c.code && <Tag 
                  bg="primary.100"
                  color="primary.500"
                  p={2}
                  mt={2}
                  userSelect="text"
                  { ...boxShadow(true) }
                >{c.code} <CopyButton mr={[2, 0]} aria-label="copy-button" textToCopy={c.code}/></Tag> }
                <Box mt={2} flexWrap="wrap">
                  <Tag 
                    colorScheme="green" 
                    { ...boxShadow() }
                  >{c.issuedIn}</Tag>
                  { c.expiresIn && <Tag 
                    colorScheme="red" 
                    ml={1} 
                    { ...boxShadow() }
                  >{c.expiresIn}</Tag> }
                </Box>
                { c.url && <Button 
                  icon="eye"
                  mt={2} 
                  link={c.url}
                  { ...boxShadow() }
                >
                  Visualizar
                </Button> }
              </Box>
            );
          })
        }
      </VStack>
    </Modal>
  );
};

export default CertificatesModal;