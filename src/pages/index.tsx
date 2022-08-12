import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { DivContainer, H1Container, PContainer, PreContainer } from "../components/Markdown/styles";
import { Profile } from "../components/Profile";
import { api } from "../services/api";

interface HomeProps {
  data: string;
  updatedAt: string;
}

function Home({
  data,
  updatedAt
}: HomeProps) {
  return (
    <>
      <section>
        <Profile
          updatedAt={updatedAt}
        />
      </section>
      <section className="flex h-full min-h-screen flex-1 flex-col gap-8">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: H1Container as any,
            p: PContainer as any,
            pre: PreContainer as any,
            div: DivContainer as any
          }}
        >
          {data}
        </ReactMarkdown>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async() => {
  const data = await api.get("https://raw.githubusercontent.com/l-marcel/next-l-marcel/main/README.md");

  const updatedAt = new Date().toString();

  return {
    props: {
      data: data.data,
      updatedAt
    },
    revalidate: false
  };
};

export default Home;