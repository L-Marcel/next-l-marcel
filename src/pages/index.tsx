import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { MarkdownCode } from "../components/Markdown/MarkdownCode";
import { MarkdownLink } from "../components/Markdown/MarkdownLink";
import { MarkdownListItem } from "../components/Markdown/MarkdownListItem";
import { MarkdownSections } from "../components/Markdown/MarkdownSections";
import { MarkdownBrContainer, MarkdownH1Container, MarkdownH2Container, MarkdownListContainer, MarkdownNavContainer, MarkdownPContainer } from "../components/Markdown/styles";
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
            h1: MarkdownH1Container,
            h2: MarkdownH2Container,
            p: MarkdownPContainer,
            a: MarkdownLink,
            pre: MarkdownCode,
            div: MarkdownSections,
            ul: MarkdownListContainer,
            li: MarkdownListItem,
            br: MarkdownBrContainer,
            nav: MarkdownNavContainer,
          } as any}
        >
          {data}
        </ReactMarkdown>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async() => {
  const res = await api.get("https://raw.githubusercontent.com/l-marcel/next-l-marcel/main/README.md");
  const updatedAt = new Date().toString();

  return {
    props: {
      data: res.data,
      updatedAt
    },
    revalidate: false
  };
};

export default Home;