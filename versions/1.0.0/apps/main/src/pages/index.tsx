import { Flex, Stack, useBreakpointValue } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import RepositoriesList from "../components/RepositoriesList";
import { RichText } from "prismic-dom";

import { api } from "../services/api";
import { getPrismicClient } from "../services/prismic";
import { getGithubRepos } from "../services/github";
import { getPointsOfTecnology } from "../utils/getPointsOfTecnology";

import { useEffect } from "react";
import useRepositories from "../hooks/useRepositories";
import useUser from "../hooks/useUser";import Head from "next/head";

import Search from "../components/Search";
import ActionButtonsGroup from "../components/ActionButtonsGroup";
import AboutMe from "../components/AboutMe";
import Profile from "../components/Profile";
import Experiences from "../components/Experiences";
import Qualities from "../components/Personality";
import { getFormattedDate } from "../utils/getFormattedDate";

interface HomeProps {
  user: User;
  repos: Repository[];
};

export default function Home({ user, repos }: HomeProps) {
  const { setRepositories } = useRepositories();
  const { setUser } = useUser();
  const isWideOrNormalVersion = useBreakpointValue({
    lg: true,
    xl: true,
    base: false
  });

  useEffect(() => {
    setRepositories(repos);
    setUser(user);
  }, [repos, user, setRepositories, setUser]);

  const orderedContainers = [
    <Experiences technologies={user.technologies} key="experiences"/>,
    <AboutMe about={user.about} key="about-me" w="100%"/>
  ];

  return (
    <>
      <Head>
        <title>Lucas Marcel</title>
      </Head>
      <Flex
        justifyContent="space-between"
        flexDir={["column", "column", "column", "row"]}
        h="100vh"
        overflowX="hidden"
        p={[30, 50]}
      >
        <Flex 
          flexDir="column"
          h="max-content"
        >
          <Profile
            isWideOrNormalVersion={isWideOrNormalVersion}
            username={user.username}
            fullname={user.fullname}
            name={user.name}
            avatar={user.avatar}
          />
          <ActionButtonsGroup user={user}/>
          { orderedContainers[isWideOrNormalVersion? 0:1] }
          <Qualities personality={user.personality}/>
        </Flex>
        <Flex flexDir="column"
          ml={[0, 0, 0, 50]}
          flex={[null, "1"]}
          h="max-content"
        >
          { orderedContainers[isWideOrNormalVersion? 1:0] }
          <Stack>
            <Search/>
            <RepositoriesList/>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};

export const getStaticProps: GetStaticProps = async() => {
  const prismic = getPrismicClient();
  const links = await prismic.getSingle("social-links", {}).then(res => {
    const { media, "cv-link": cvLink } = res.data;
    const socialLinks: SocialLink[] = media.map(sl => {
      return {
        name: sl.name,
        link: sl.link,
        type: sl.islink? "link":"copy",
      } as SocialLink;
    });
    
    return {
      links: socialLinks,
      cv: cvLink
    };
  });

  const formatters = await prismic.getSingle("name_formatter", {}).then(res => {
    const formatters = res.data.formatter.map(f => {
      return {
        ...f,
        replace: f.replace !== ""? f.replace:" "
      } as Formatter;
    });
    return formatters;
  }).catch((err) => {
    console.log(err);
  });

  const user = await api.get("https://api.github.com/users/l-marcel").then(res => {
    const data = res.data;
    const splitedName = data.name.split(" ");
    const firstName = splitedName.length > 0 ? splitedName[0]:"";
    const lastName = splitedName.length > 1 ? splitedName[splitedName.length - 1]:"";

    return {
      username: String(data.login).toLowerCase(),
      fullname: data.name,
      name: `${firstName} ${lastName}`,
      avatar: data.avatar_url,
      reposUrl: data.repos_url,
      qtdRepos: data.public_repos,
      about: "",
      certificates: [],
      technologies: [],
      personality: []
    } as User;
  });

  const repos = await getGithubRepos(user.reposUrl, {
    initialPage: 1,
    reposPerPage: 50,
    repos: [],
    formatters
  });

  const user_data = await prismic.getSingle("profile", {}).then(res => {
    const about = RichText.asHtml(res.data.about)
    .replace(/\<pre\>/g, '<section><pre>')
    .replace(/\<\/pre>/g, '</section></pre>');
    const technologies: Technology[] = res.data.technology.map(technology => {
      const { 
        name,
        isstudying,
        haveexperience,
        haveprojects,
        haveinterest,
        abletolead,
        usewithfrequency,
        level 
      } = technology;

      const _tecnology = {
        name,
        isStudying: isstudying,
        haveExperience: haveexperience,
        haveProjects: haveprojects,
        haveInterest: haveinterest,
        ableToLead: abletolead,
        useWithFrequency: usewithfrequency,
        time: level,
        points: 0
      };

      _tecnology.points = getPointsOfTecnology(_tecnology);

      return _tecnology;
    });
    const personality: Personality[] = res.data.personality;
    const certificates: Certificate[] = res.data.certificate.map(certificate => {
      return {
        name: certificate.name,
        issuingOrganization: certificate.issuing_organization,
        issuedIn: getFormattedDate(certificate.issued_in),
        expiresIn: certificate.expires_in? getFormattedDate(certificate.expires_in):null,
        code: certificate.code,
        url: certificate.url
      } as Certificate;
    })

    return {
      about,
      technologies,
      personality,
      certificates
    };
  }).catch((err) => {
    console.log(err);
    return {};
  });

  return {
    props: {
      user: {
        ...user,
        ...user_data,
        ...links
      },
      repos,
    } as HomeProps,
    revalidate: 60 * 60 * 24 //A cada 24 horas atualiza os dados
  };
};