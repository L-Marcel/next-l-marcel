import { GetStaticProps } from "next";
import Head from "next/head";
import { IconType } from "../components/Icon";
import { Timeline } from "../components/Timeline";
import { Graphql } from "../services/Graphql";

export type Achievement = {
  id: string
  title: string,
  subtitle: string,
  description: string,
  registered_in: Date | string,
  expires_in?: Date | string,
  url?: string,
  code?: string,
  icon: IconType,
  button_icon?: IconType,
  button_text?: string,
};

export interface AchievementsProps {
  achievements: Achievement[];
  locale?: string;
}

function Achivements({ achievements, locale }: AchievementsProps) {
  return (
    <>
      <Head>
        <title>{locale === "en-us"? "Achivements":"Conquistas"}</title>
      </Head>
      <section className="-mb-8 max-w-[100vw] overflow-x-hidden">
        <Timeline
          achievements={achievements}
        />
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async({ locale }) => {
  const isNotPtBr = locale === "en-us";
  const achievements = await Graphql.getInformation(isNotPtBr? "EN":"BR")
    .then(res => res.achievements ?? [])
    .catch(() => []);

  return {
    props: {
      achievements,
      locale
    },
    revalidate: false
  };
};

export default Achivements;