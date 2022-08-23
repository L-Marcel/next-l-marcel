import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { SearchRepositoryInput } from "../components/Input/SearchRepositoryInput";
import { Github, Repository } from "../services/Github";

interface ProjectsProps {
  repositories: Repository[];
}

function Projects({
  repositories
}: ProjectsProps) {
  console.log(repositories);
  const router = useRouter();
  const isNotPtBr = router.locale !== "pt-br";
  
  return (
    <>
      <section className="relative mt-36 flex w-full flex-1 flex-col items-center justify-center gap-4">
        <p>{isNotPtBr? "Just a test...":"Apenas um teste"}</p>
        <SearchRepositoryInput
          repositoriesNames={repositories.map(repository => [repository.name, repository.formattedName])}
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