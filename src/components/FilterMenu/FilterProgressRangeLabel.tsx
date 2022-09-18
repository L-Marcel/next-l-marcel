import { useFilter } from "../../context/hooks/useFilter";
import { useRouter } from "../../context/hooks/useRouter";
import { ProgressRangeDisabledLabel, ProgressRangeLabel, ProgressRangeLabelBox } from "./styles";

export interface FilterProgressRangeLabelProps {
  label: string;
  disabledLabel?: string;
}

export function FilterProgressRangeLabel({
  label,
  disabledLabel
}: FilterProgressRangeLabelProps) {
  const { isNotPtBr } = useRouter();
  const { filter } = useFilter();

  const minProgress = filter.progress.min/100;
  const maxProgress = filter.progress.max/100;

  const isEnabled = !(
    (minProgress === 1) || 
    (maxProgress === 0) ||
    (minProgress === 0 && maxProgress === 1)
  );

    
  function getTranslatedText(text: string, isNotPtBr: boolean) {
    if(isNotPtBr) {
      switch(text) {
      default:
        return text;
      }
    }

    switch(text) {
    case "progress":
      return "progresso";
    case "/ disabled filter":
      return "/ filtro desativado";
    default:
      return text;
    }
  }
  
  return (
    <ProgressRangeLabelBox>
      <ProgressRangeLabel isEnabled={isEnabled}>{getTranslatedText(label, isNotPtBr)}</ProgressRangeLabel>
      {(disabledLabel && !isEnabled) && <ProgressRangeDisabledLabel>{getTranslatedText(disabledLabel, isNotPtBr)}</ProgressRangeDisabledLabel>}
    </ProgressRangeLabelBox>
  );
}