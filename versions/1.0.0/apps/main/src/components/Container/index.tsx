import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, BoxProps } from "@chakra-ui/react";

import { bg } from "../../theme/effects/bg";

interface ContainerProps extends BoxProps {
  withAccordion?: boolean;
  accordionTitle?: string;
  hoverEffect?: boolean;
  cursorPointer?: boolean;
  startOpen?: boolean;
  stickyMode?: boolean;
};

function Container({ 
  children, 
  withAccordion = false, 
  accordionTitle = "", 
  hoverEffect = false, 
  cursorPointer = false,
  startOpen = true,
  stickyMode = false,
  ...rest 
}: ContainerProps) {
  if(!withAccordion) {
    return (
      <Box
        {...bg({ hoverEffect, cursorPointer, stickyMode }) as any}
        mb={[30, 50]}
        p={30}
        w={["auto", "auto", "auto", 380]}
        {...rest}
      >
        {children}
      </Box>
    );
  };

  return (
    <Box
      {...bg({ hoverEffect }) as any}
      mb={[30, 50]}
      p={30}
      w={["auto", "auto", "auto", 380]}
      {...rest}
    >
      <Accordion allowToggle defaultIndex={startOpen? 0:-1}>
        <AccordionItem border="none" tabIndex={0}>
          <h2>
            <AccordionButton
              p={0}
              color="primary.500"
              fontWeight="bold"
              fontSize={[14, 19]}
              _hover={{
                bg: "transparent"
              }}
            >
              <Box flex='1' textAlign='left'>
                {accordionTitle}
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel mt={4} p={0}>
            {children}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Container;
