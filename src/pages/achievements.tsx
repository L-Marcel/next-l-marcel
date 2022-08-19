import { GetStaticProps } from "next";
import { Graphql } from "../services/Graphql";

function Achivements({ data }: any) {
  return (
    <div className="flex h-full min-h-screen flex-1 flex-col items-center justify-center gap-4">
      <pre className="max-w-xl">
        <code>
          {JSON.stringify(data, null, 2)}
        </code>
      </pre>
    </div>
  );
}

export default Achivements;

export const getStaticProps: GetStaticProps = async({ locale }) => {
  const isNotPtBr = locale !== "pt-br";
  const data = await Graphql.getInformation(isNotPtBr? "EN":"BR");

  return {
    props: {
      data
    },
    revalidate: 1000
  };
};