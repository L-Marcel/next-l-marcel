import { useRouter } from "../../context/hooks/useRouter";
import { ReturnButtonContainer } from "./styles";

export interface ReturnButtonProps {
  path: string;
}

export function ReturnButton({ path }: ReturnButtonProps) {
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