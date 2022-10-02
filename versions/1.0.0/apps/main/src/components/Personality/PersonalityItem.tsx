import { ListIcon, ListItem } from "@chakra-ui/react";
import { icons } from "../Icon";

interface PersonalityItemProps {
  personality: Personality;
};

function PersonalityItem({ personality }: PersonalityItemProps) {
  return (
    <ListItem
      fontSize={[14, 16]}
    >
      <ListIcon 
        as={icons[personality.type === "quality"? "check":"close"]} 
        color={personality.type === "quality"? "primary.500":"red"}
        mb="1.5px"
      />
      {personality.description}
    </ListItem>
  );
};

export default PersonalityItem;