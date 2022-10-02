import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import useFilterOptions from "../../hooks/useFilterOptions";
import useUser from "../../hooks/useUser";
import { arrayToObject } from "../../utils/arrayToObject";
import CloseButton from "../Button/CloseButton";
import FilterArrayOption from "./FilterArrayOption";
import FilterOption from "./FilterOption";

interface FilterDrawerProps {
  onClose: () => void;
  isOpen: boolean;
};

function FilterDrawer({ onClose, isOpen }: FilterDrawerProps) {
  const { user } = useUser();
  const { filterOptions, setFilterOptions } = useFilterOptions();

  function handleOnChangeTechnologies(arr: string[]) {
    setFilterOptions({
      ...filterOptions,
      technologies: arr
    });
  };

  function handleOnChangeIs(some: boolean, data: FilterOptionData[]) {
    setFilterOptions({
      ...filterOptions,
      is: {
        some,
        ...arrayToObject(data)
      },
    });
  };

  function handleOnChangeWith(some: boolean, data: FilterOptionData[]) {
    setFilterOptions({
      ...filterOptions,
      with: {
        some,
        ...arrayToObject(data)
      },
    });
  };

  return (
    <Drawer size="sm" placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay/>
      <DrawerContent 
        bg="primary.100" 
        bgImage="/background.png" 
        bgRepeat="no-repeat" 
        overflowY="auto"
        p={[5, 6]}
      >
        <CloseButton aria-label="close-drawer-button" onClick={onClose}/>
        <DrawerHeader 
          py="0 !important"
          mt={2}
          fontSize={25}
          color="primary.500"
        >
          Filtrar repositórios
        </DrawerHeader>
        <DrawerBody overflow="none">
          <FilterArrayOption
            onChangeArray={handleOnChangeTechnologies}
            arr={filterOptions.technologies}
            compareTo={user.technologies.map(t => t.name)}
            title="Tecnologias utilizadas:"
          />
          <FilterOption
            onChangeData={(some, data) => handleOnChangeIs(some, data)}
            data={[
              { title: "Fork", text: "fork", value: filterOptions.is.fork },
              { title: "Template", text: "template", value: filterOptions.is.template }
            ]}
            title="Tipo de repositório:"
          />
          <FilterOption 
            onChangeData={(some, data) => handleOnChangeWith(some, data)}
            data={[
              { title: "Descrição", text: "description", value: filterOptions.with.description },
              { title: "Licença", text: "license", value: filterOptions.with.license },
              { title: "Projeto no Figma", text: "figmaLink", value: filterOptions.with.figmaLink }
            ]}
            title="Necessário ter:"
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterDrawer;