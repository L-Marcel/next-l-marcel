import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Resume, { ResumeProps } from "..";
import { useRouter } from "../../context/hooks/useRouter";
import { Github } from "../../services/Github";


export function Project(props: ResumeProps) {
  const router = useRouter();

  if(router.isFallback) {
    return (
      <></>
    );
  }

  return Resume({ ...props, withProfile: false });
}

export const getStaticPaths: GetStaticPaths = async({ locales }) => {
  const repositories = await Github.getRepositories({});
  let paths: (string | {
      params: ParsedUrlQuery;
      locale?: string | undefined;
  })[] = [];

  for(const l in locales) {
    const localePaths = await Promise.all(repositories.map(async(repository) => {
      return {
        params: {
          name: repository.name.toLowerCase()
        },
        locale: locales[Number(l)]
      };
    }));

    paths = [...paths, ...localePaths];
  }

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async({ locale, params }) => {
  if(!params?.name || Array.isArray(params?.name)) {
    return {
      notFound: true
    };
  }

  const repositoryExist = await Github.checkRepository(params?.name);

  if(!repositoryExist) {
    return {
      notFound: true
    };
  }

  const { repository, readme, demoVideoURL } = await Github.getRepository({
    repositoryName: params?.name,
    locale: locale ?? "pt-br",
    getLanguages: true
  });
  
  const uniqueTechnologies = new Set<string>();
  const currentTechnologies = repository.importedConfig?.technologies;

  if(currentTechnologies) {
    for(const t in currentTechnologies) {
      uniqueTechnologies.add(currentTechnologies[t].toLowerCase());
    }
  }

  const technologies = Array.from(uniqueTechnologies);
  
  const updatedAt = new Date().toString();

  return {
    props: {
      data: readme,
      technologies,
      updatedAt,
      name: params?.name,
      demoVideoURL
    },
    revalidate: 1
  };
};

export default Resume;