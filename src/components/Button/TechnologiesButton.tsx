
import { useRouter } from "../../context/hooks/useRouter";
import { TechnologiesButtonContainer } from "./styles";

export function TechnologiesButton() {
  const { isNotPtBr } = useRouter();

  return (
    <TechnologiesButtonContainer>
      {isNotPtBr? "used technologies":"tecnologias usadas"}
    </TechnologiesButtonContainer>
  );
}