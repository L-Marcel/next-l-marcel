import { VStack } from "@chakra-ui/react";

import { getProgressMessage } from "../../utils/getProgressMessage";

import Container from "../Container";
import ExperienceItem from "./ExperienceItem";

interface ExperiencesProps {
  technologies: Technology[];
};

function Experiences({ technologies }: ExperiencesProps) {
  return (
    <Container withAccordion startOpen={false} accordionTitle="Experiências">
      <VStack mt={4}>
        {
          technologies.map(technology => {
            return (
              <ExperienceItem 
                key={`${technology.name}-${technology.points}`}
                name={technology.name}
                progress={technology.points}
                message={getProgressMessage(technology)}
              />
            );
          })
        }
      </VStack>
    </Container>
  );
};

export default Experiences;