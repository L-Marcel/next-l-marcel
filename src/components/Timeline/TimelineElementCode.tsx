import { useState } from "react";
import { useRouter } from "../../context/hooks/useRouter";
import { Icon } from "../Icon";
import { TimelineElementCodeContainer, TimelineElementCodeCopyButton } from "./styles";

export interface TimelineElementCodeProps {
  code: string;
}

export function TimelineElementCode({ code }: TimelineElementCodeProps) {
  const { isNotPtBr } = useRouter();
  const [isCopied, setIsCopied] = useState(false);

  function handleOnCopyCode(code: string) {
    let interval: NodeJS.Timer;

    window.navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      if(!interval) {
        setTimeout(() => {
          setIsCopied(false);
        }, 1000 * 2);
      }
    }).catch(() => {
      setIsCopied(false);
    });
  }
  
  return (
    <TimelineElementCodeContainer>
      {code} 
      <TimelineElementCodeCopyButton isNotPtBr={isNotPtBr} onClick={() => handleOnCopyCode(code)}>
        <Icon name="copy" withoutTooltip/>
        <p className="flex !w-[6.6rem]">
          {isNotPtBr?
            (isCopied? "code copied!":"click to copy"):
            (isCopied? "código copiado!":"aperte para copiar")
          }
        </p>
      </TimelineElementCodeCopyButton>
    </TimelineElementCodeContainer>
  );
}