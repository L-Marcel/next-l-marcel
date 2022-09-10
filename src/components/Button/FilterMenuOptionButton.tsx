import { motion } from "framer-motion";
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
  function handleOnClick() {
    onClick(item);
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
          paddingRight: "0.75rem"
        },
        selected: {
          paddingTop: "0.12rem",
          paddingBottom: "0.12rem",
          paddingRight: "2.25rem",
          transition: {
            duration: .2
          }
        }
      }}
    >
      <p className="mt-[-1px] pb-[1px] align-baseline !text-inherit">{item}</p>
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