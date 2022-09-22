import { useRouter } from "../../context/hooks/useRouter";
import { ReturnButtonContainer } from "./styles";

export function ReturnButton() {
  const { back, isNotPtBr } = useRouter();

  return (
    <ReturnButtonContainer onClick={back}>
      {"<-"} {isNotPtBr? "return":"voltar"}
    </ReturnButtonContainer>
  );
}