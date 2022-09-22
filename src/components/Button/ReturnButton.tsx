import { useRouter } from "../../context/hooks/useRouter";
import { ReturnButtonContainer } from "./styles";

export function ReturnButton(path: string) {
  const { push, isNotPtBr } = useRouter();

  function handleNavigateBack() {
    push(path);
  }

  return (
    <ReturnButtonContainer onClick={handleNavigateBack}>
      {"<-"} {isNotPtBr? "return":"voltar"}
    </ReturnButtonContainer>
  );
}