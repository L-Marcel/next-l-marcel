import { motion } from "framer-motion";
import { useRouter } from "../../context/hooks/useRouter";
import { Icon } from "../Icon";

export interface FilterMenuOptionButtonProps {
  onClick: (item: string) => void;
  isSelected: boolean;
  item: string;
}

export function FilterMenuOptionButton({ 
  isSelected, 
  onClick,
  item
}: FilterMenuOptionButtonProps) {
  const { isNotPtBr } = useRouter();
  
  function handleOnClick() {
    onClick(item);
  }

  function getTranslatedText(text: string, isNotPtBr: boolean) {
    if(isNotPtBr) {
      switch(text) {
      case "progress":
        return "in progress";
      default:
        return text;
      }
    }

    switch(text) {
    case "finished":
      return "concluído";
    case "deployed":
      return "implementado";
    case "licensed":
      return "licenciado";
    case "progress":
      return "em progresso";
    case "canceled":
      return "cancelado";
    case "common":
      return "comum";
    case "highlight":
      return "destaque";
    case "fork":
      return "bifurcação";
    case "template":
      return "modelo";
    case "none":
      return "nenhum";
    case "description":
      return "descrição";
    case "documentation":
      return "documentação";
    default:
      return text;
    }
  }
  
  return (
    <motion.button
      className={`relative flex flex-row items-center justify-center rounded-xl px-3 active:!text-gray-600 ${
        isSelected? "!bg-primary-500 !text-gray-700 hover:!bg-primary-600":""
      }`} 
      initial={isSelected? "selected":"initial"}
      onClick={handleOnClick}
      animate={isSelected? "selected":"initial"}
      variants={{
        initial: {
          paddingTop: "0.12rem",
          paddingBottom: "0.12rem",
          paddingRight: "0.75rem",
          transition: {
            ease: "easeInOut"
          }
        },
        selected: {
          paddingTop: "0.12rem",
          paddingBottom: "0.12rem",
          paddingRight: "2.25rem",
          transition: {
            duration: .2,
            ease: "easeInOut"
          }
        }
      }}
    >
      <p className="mt-[-1px] pb-[1px] align-baseline !text-inherit">{getTranslatedText(item, isNotPtBr)}</p>
      {
        isSelected && <motion.div
          className="absolute right-3"
          initial="initial"
          animate="selected"
          variants={{
            initial: {
              opacity: 0,
            },
            selected: {
              opacity: 1,
              transition: {
                delay: .15,
                duration: .1
              }
            }
          }}
        >
          <Icon
            name="x"
            size="sm"
            className="h-4 w-4"
            withoutTooltip
          />
        </motion.div>
      }
    </motion.button>
  );
}