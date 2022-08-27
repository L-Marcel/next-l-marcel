import { GetStaticProps } from "next";
import { SearchRepositoryInput } from "../components/Input/SearchRepositoryInput";
import { RepositoriesList } from "../components/List/RepositoriesList";
import { SearchProvider } from "../context/providers/SearchProvider";
import { Github, Repository } from "../services/Github";

interface ProjectsProps {
  repositories: Repository[];
}

function Projects({
  repositories
}: ProjectsProps) {
  return (
    <SearchProvider
      repositories={repositories}
    >
      <section className="relative mx-12 mt-14 flex flex-col items-start justify-center gap-4 md:mx-16 md:mt-[5rem]">
        <SearchRepositoryInput
          repositories={repositories.map(({ name, formattedName, importedConfig })=> ({
            name,
            formattedName,
            isPinned: importedConfig?.pinned ?? false
          }))}
        />
      </section>
      <section className="relative mx-12 my-5 flex flex-1 flex-col items-start gap-4 justify-self-start md:mx-16">
        <RepositoriesList/>
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