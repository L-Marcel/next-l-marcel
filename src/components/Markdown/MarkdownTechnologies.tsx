import { useRouter } from "next/router";
import { LibrariesIcons } from "./Icons/LibrariesIcons";
import { TechnologiesIcons } from "./Icons/TechnologiesIcons";
import { UtilitiesIcons } from "./Icons/UtilitiesIcons";
import { MarkdownDiv } from "./MarkdownDiv";
import { TechnologiesLevel } from "./TechnologyLevel/TechnologiesLevel";

export function MarkdownTechnologies() {
  const router = useRouter();
  const isPtBr = router.locale === "pt-br";
  
  return (
    <>
      <MarkdownDiv className="flex flex-col gap-4">
        {isPtBr? 
          <h2><span>Proeficiência</span> com as technologias</h2>:
          <h2>Technologies <span>proficiency</span></h2>
        }
        <TechnologiesIcons/>
      </MarkdownDiv>
      <TechnologiesLevel/>
      <MarkdownDiv isHighlight className="flex flex-col gap-4">
        {isPtBr? 
          <h3>Proeficiência com as technologias</h3>:
          <h3>Production utilities</h3>
        }
        <UtilitiesIcons/>
      </MarkdownDiv>
      <MarkdownDiv isHighlight className="flex flex-col gap-4">
        {isPtBr? 
          <h3>Bibliotecas mais usadas</h3>:
          <h3>Frequently used libraries</h3>
        }
        <LibrariesIcons/>
      </MarkdownDiv>
    </>
  );
}