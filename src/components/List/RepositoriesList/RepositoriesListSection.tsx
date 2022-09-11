import dynamic from "next/dynamic";
import { PaginationButtons } from "../../Button/PaginationButtons";
import { RepositoriesListSectionContainer } from "./styles";

const RepositoriesList = dynamic<unknown>(() => import(".").then(mod => mod.RepositoriesList), {
  ssr: false
});

export function RepositoriesListSection() {
  return (
    <RepositoriesListSectionContainer>
      <RepositoriesList/>
      <PaginationButtons/>
    </RepositoriesListSectionContainer>
  );
}