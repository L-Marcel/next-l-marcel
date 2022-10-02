import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

import useFilterOptions from "../../hooks/useFilterOptions";

import Container from "../Container";
import SearchFilters from "./SearchFilters";

function Search() {
  const { filterOptions, setFilterOptions } = useFilterOptions();

  function onChangeQuery(q: string) {
    setFilterOptions({
      ...filterOptions,
      query: q
    });
  };

  return (
    <HStack
      id="search-group"
      position="sticky"
      mt={-35}
      top={-35}
      pt={35}
      mb={35}
      zIndex={30}
    >
      <Container
        maxW={["auto", 250, 300, 400]}
        p={0}
        color="primary.500"
        mb={0}
        hoverEffect
        stickyMode
        mr={[2, 2, 4, 15]}
      >
        <InputGroup>
          <InputLeftElement
            minH={50}
            ml={2}
            w={10}
            children={<FaSearch/>}
          />
          <Input 
            pl={45} 
            minH={50} 
            border="none"
            placeholder="Pesquisar"
            value={filterOptions.query}
            onChange={e => onChangeQuery(e.currentTarget.value)}
          />
        </InputGroup>
      </Container>
      <SearchFilters
        filterOptions={filterOptions}
        onChangeFilterOptions={(filter) => setFilterOptions(filter)}
      />
    </HStack>
  );
};

export default Search;