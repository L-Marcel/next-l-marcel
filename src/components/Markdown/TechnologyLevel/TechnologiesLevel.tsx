import { TechnologyLevel } from ".";
import { technologies } from "../../../constants/technologies";

export function TechnologiesLevel() {
  return (
    <div className="mx-12 mb-2 grid gap-8 sm:grid-cols-2 md:mx-16 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {technologies.levels.map(({ level, name }) => {
        return (
          <TechnologyLevel
            key={`level-${name}`}
            technology={name}
            level={level}
            max={10}
          />
        );
      })}
    </div>
  );
}