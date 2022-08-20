import { GetStaticProps } from "next";
import { IconType } from "react-icons";
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
};

export interface AchievementsProps {
  achievements: Achievement[];
}

function Achivements({ achievements }: AchievementsProps) {
  return (
    <section className="max-w-[100vw] overflow-x-hidden">
      <Timeline
        achievements={achievements}
      />
    </section>
  );
}

export const getStaticProps: GetStaticProps = async({ locale }) => {
  const isNotPtBr = locale !== "pt-br";
  const achievements = await Graphql.getInformation(isNotPtBr? "EN":"BR")
    .then(res => res.achievements ?? [])
    .catch(() => []);

  return {
    props: {
      achievements
    },
    revalidate: false
  };
};

export default Achivements;