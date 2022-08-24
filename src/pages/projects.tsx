import { GetStaticProps } from "next";
import { SearchRepositoryInput } from "../components/Input/SearchRepositoryInput";
import { useRouter } from "../context/hooks/useRouter";
import { Github, Repository } from "../services/Github";

interface ProjectsProps {
  repositories: Repository[];
}

function Projects({
  repositories
}: ProjectsProps) {
  const { isNotPtBr } = useRouter();
  
  return (
    <>
      <section className="relative mx-12 mt-14 flex min-h-full w-full flex-col items-start justify-center gap-4 md:mx-16 md:mt-[5rem]">
        <SearchRepositoryInput
          repositories={repositories.map(({ name, formattedName, importedConfig })=> ({
            name,
            formattedName,
            isPinned: importedConfig?.pinned ?? false
          }))}
        />
      </section>
    </>
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
      repositories,
      updatedAt
    },
    revalidate: false
  };
};

export default Projects;