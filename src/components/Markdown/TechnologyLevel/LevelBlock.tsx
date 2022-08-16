import { motion } from "framer-motion";

export interface LevelBlockProps {
  isActived?: boolean;
  levelIsLow?: boolean;
}

export function LevelBlock({
  isActived = false,
  levelIsLow = false
}: LevelBlockProps) {
  return (
    <div className="h-12 w-5 bg-white-700 shadow-lg dark:bg-gray-500">
      {isActived && <motion.div
        className="h-full w-full"
        variants={{
          disabled: {
            backgroundColor: levelIsLow? "#C1412E00":"#EB513B00"
          },
          visible: {
            backgroundColor: levelIsLow? "#C1412E":"#EB513B"
          }
        }}
      />}
    </div>
  );
}