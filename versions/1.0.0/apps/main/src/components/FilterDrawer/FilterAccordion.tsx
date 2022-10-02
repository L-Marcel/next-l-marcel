import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FilterAccordionProps {
  header: ReactNode;
  children: ReactNode;
};

function FilterAccordion({ header, children }: FilterAccordionProps) {
  return (
    <Accordion allowToggle defaultIndex={-1} mb={4}>
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
            {header}
          <AccordionIcon mx={4}/>
          </AccordionButton>
        </h2>
        <AccordionPanel mt={4} p={0}>
          {children}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterAccordion;