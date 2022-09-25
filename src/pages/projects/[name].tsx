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

  let data:string = await Github.getReadme(locale ?? "pt-br", `l-marcel/${params?.name}`);
  const updatedAt = new Date().toString();

  data = data.replace("<div id=\"repository-buttons\"/>", `<a class="navigation-link" href="https://github.com/l-marcel/${params?.name}" target="__blank__">
  ${locale !== "pt-br"? "repository":"repositório"}
</a>
<span id="only-if-not-last">•</span>`);

  data = data.replace("<span id=\"repository-name\"/>", `<span>${params?.name}</span>`);

  return {
    props: {
      data,
      updatedAt
    },
    revalidate: 1
  };
};

export default Resume;