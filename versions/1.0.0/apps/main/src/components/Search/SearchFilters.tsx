import { IconButton, useDisclosure, useToast } from "@chakra-ui/react";
import Container from "../Container";
import Icon from "../Icon";
import RepositoriesCount from "./RepositoriesCount";

import style from "../../theme/scss/button.module.scss";
import { customToast } from "../CustomToast";
import FilterDrawer from "../FilterDrawer";

interface SearchFiltersProps {
  filterOptions: RepositoriesFilterOptions;
  onChangeFilterOptions: (filter: RepositoriesFilterOptions) => void;
};

function SearchFilters({ filterOptions, onChangeFilterOptions }: SearchFiltersProps) {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <>
      <Container
        w="min-content"
        p={1}
        color="primary.500"
        mt={0}
        minH="50px"
        stickyMode
        display="flex"
        hoverEffect
      >
        <IconButton 
          aria-label="filter" 
          icon={<Icon name="filter"/>}
          bg="primary.200"
          m={1}
          w={8}
          minW={8}
          h={8}
          _hover={{
            bg: "primary.500",
            color: "white"
          }}
          onClick={onOpen}
        />
        <IconButton 
          aria-label="flash" 
          icon={<Icon name={filterOptions.pinnedsFirst? "flash":"flash-off"}/>}
          m={1}
          w={8}
          minW={8}
          h={8}
          _hover={{
            bg: "primary.500",
            color: "white"
          }}
          onClick={() => onChangeFilterOptions({
            ...filterOptions,
            pinnedsFirst: !filterOptions.pinnedsFirst
          })}
          className={`${style.filterButton} ${
            filterOptions.pinnedsFirst ? style.active: ""
          }`} 
        />
        <RepositoriesCount/>
      </Container>
      <FilterDrawer
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
};

export default SearchFilters;