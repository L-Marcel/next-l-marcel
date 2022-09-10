import { motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "../Icon";

export function FilterMenuOptionButton() {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <motion.button
      className={`relative flex flex-row items-center justify-center px-3 py-[0.1rem] ${
        isActive? "!bg-primary-500 !text-gray-700 hover:!bg-primary-600":""
      }`} 
      onClick={() => setIsActive(active => !active)}
      initial="initial"
      animate={isActive? "selected":"initial"}
      variants={{
        initial: {
          paddingRight: "0.75rem"
        },
        selected: {

          paddingRight: "2.25rem",
          transition: {
            duration: .2,
            delayChildren: .1,
            staggerChildren: .1
          }
        }
      }}
    >
      <p className="mt-[-1px] pb-[1px] align-baseline !text-inherit">example</p>
      {
        isActive && <motion.div
          className="absolute right-3"
          variants={{
            initial: {
              opacity: 0
            },
            selected: {
              opacity: 1
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