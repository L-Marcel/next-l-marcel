import { GetStaticProps } from "next";
import Head from "next/head";
import { NextSeo } from "next-seo";
import ReactMarkdown from "react-markdown";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
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
import { FirstSection } from "../styles/document/styles";

export type MarkdownComponents = Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents>;
export interface ResumeProps {
  data: string;
  updatedAt: string;
  withProfile: boolean;
  name?: string;
}

function Resume({
  data,
  withProfile,
  updatedAt,
  name
}: ResumeProps) {
  return (
    <>
      <NextSeo
        defaultTitle="L-Marcel"
        titleTemplate="L-Marcel"
      />
      <FirstSection hasProfile={withProfile}>
        { withProfile && <Profile
          updatedAt={updatedAt}
        /> }
      </FirstSection>
      <section className="flex h-full min-h-[calc(100vh_-_14rem)] flex-1 flex-col gap-8 md:min-h-[calc(100vh_-_16rem)] xs:min-h-[calc(100vh_-_9rem)]">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: MarkdownH1Container,
            h2: MarkdownH2Container,
            p: MarkdownPContainer,
            a: MarkdownLink,
            pre: MarkdownCode,
            div: ({ ...rest }) => <MarkdownSections 
              showReturnButton={!withProfile} 
              {...rest}
            />,
            ul: MarkdownList,
            ol: MarkdownList,
            li: MarkdownListItem,
            br: MarkdownBrContainer,
            nav: MarkdownNavContainer,
          } as MarkdownComponents}
        >
          {data}
        </ReactMarkdown>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async({ locale }) => {
  let data = await Github.getReadme(locale ?? "pt-br");
  const updatedAt = new Date().toString();

  data = data.replace("<div id=\"repository-buttons\"/>", `<a class="navigation-link" href="https://github.com/l-marcel/l-marcel" target="__blank__">
  ${locale !== "pt-br"? "repository":"repositório"}
</a>
<span id="only-if-not-last">•</span>`);

  return {
    props: {
      data,
      updatedAt,
      withProfile: true
    },
    revalidate: false
  };
};

export default Resume;