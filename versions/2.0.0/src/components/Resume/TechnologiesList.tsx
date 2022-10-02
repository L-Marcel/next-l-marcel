import { TechnologyLevel } from "./TechnologyLevel";

function TechnologiesList() {
  return (
    <>
      <TechnologyLevel
        level={6}
        title="JavaScript"
      />
      <TechnologyLevel
        level={5}
        title="TypeScript"
      />
      <TechnologyLevel
        level={6}
        title="Next.js"
      />
      <TechnologyLevel
        level={5}
        title="React.js"
      />
      <TechnologyLevel
        level={4}
        title="Node.js"
      />
      <TechnologyLevel
        level={5}
        title="HTML"
      />
      <TechnologyLevel
        level={5}
        title="CSS"
        iconName="css"
      />
      <TechnologyLevel
        level={4}
        title="Chakra UI"
        iconName="chakraui"
      />
      <TechnologyLevel
        level={5}
        title="Tailwind CSS"
        iconName="tailwind"
      />
      <TechnologyLevel
        level={4}
        title="Framer Motion"
      />
      <TechnologyLevel
        level={5}
        title="Prisma"
      />
      <TechnologyLevel
        level={4}
        title="Express"
      />
      <TechnologyLevel
        level={3}
        title="Jest"
      />
      <TechnologyLevel
        level={4}
        title="Git & Github"
        iconName="git"
      />
      <TechnologyLevel
        level={3}
        title="Docker"
      />
      <TechnologyLevel
        level={4}
        title="Figma"
      />
      <TechnologyLevel
        level={5}
        title="VSCode"
      />
    </>
  );
};

export { TechnologiesList };

