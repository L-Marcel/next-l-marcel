import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { PaginationButtons } from "../components/Button/PaginationButtons";
import { FilterMenu } from "../components/FilterMenu";
import { ToggleFilterMenuButton } from "../components/FilterMenu/ToggleFilterMenuButton";
import { SearchRepositoryInput } from "../components/Input/SearchRepositoryInput";
import { MenuProvider } from "../context/providers/MenuProvider";
import { SearchProvider } from "../context/providers/SearchProvider";
import { Github, Repository } from "../services/Github";

interface ProjectsProps {
  repositories: Repository[];
}

const RepositoriesList = dynamic<unknown>(() => import("../components/List/RepositoriesList").then(mod => mod.RepositoriesList), {
  ssr: false
});

function Projects({
  repositories
}: ProjectsProps) {
  return (
    <SearchProvider
      repositories={repositories}
    >
      <MenuProvider>
        <section className="relative mx-12 mt-14 flex flex-row items-center justify-start gap-4 md:mx-16 md:mt-[5rem]">
          <SearchRepositoryInput
            repositories={repositories.map(({ name, formattedName, importedConfig })=> ({
              name,
              formattedName,
              isPinned: importedConfig?.pinned ?? false
            }))}
          />
          <ToggleFilterMenuButton
            className="hidden rounded-md md:block"
          />
        </section>
        <FilterMenu/>
      </MenuProvider>
      <section className="relative mx-12 my-5 flex flex-1 flex-col items-start gap-4 justify-self-start md:mx-16">
        <RepositoriesList/>
        <PaginationButtons/>
      </section>
    </SearchProvider>
  );
}

export const getStaticProps: GetStaticProps = async({ locale }) => {
  const repositories = await Github.getRepositories({
    locale: locale ?? "pt-br",
    getLanguages: true
  });
  
  const updatedAt = new Date().toString();

  return {
    props: {
      repositories: repositories.sort((a, b) => a.fullname.toLowerCase().localeCompare(b.fullname.toLowerCase())),
      updatedAt
    },
    revalidate: false
  };
};

export default Projects;