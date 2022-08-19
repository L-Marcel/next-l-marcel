import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { MarkdownCode } from "../components/Markdown/MarkdownCode";
import { MarkdownLink } from "../components/Markdown/MarkdownLink";
import { MarkdownList } from "../components/Markdown/MarkdownList";
import { MarkdownListItem } from "../components/Markdown/MarkdownListItem";
import { MarkdownSections } from "../components/Markdown/MarkdownSections";
import { MarkdownBrContainer, MarkdownH1Container, MarkdownH2Container, MarkdownNavContainer, MarkdownPContainer } from "../components/Markdown/styles";
import { Profile } from "../components/Profile";
import { Github } from "../services/Github";

interface ResumeProps {
  data: string;
  updatedAt: string;
}

function Resume({
  data,
  updatedAt
}: ResumeProps) {
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
            ul: MarkdownList,
            ol: MarkdownList,
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

export const getStaticProps: GetStaticProps = async({ locale }) => {
  const data = await Github.getReadme(locale ?? "pt-br");
  const updatedAt = new Date().toString();

  return {
    props: {
      data,
      updatedAt
    },
    revalidate: false
  };
};

export default Resume;