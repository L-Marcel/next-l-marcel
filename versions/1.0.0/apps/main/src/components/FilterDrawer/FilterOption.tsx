import { Checkbox, Stack } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import FilterAccordion from "./FilterAccordion";

interface FilterOptionProps {
  title: string;
  data: FilterOptionData[];
  onChangeData: (some: boolean, data: FilterOptionData[]) => void;
};

function FilterOption({ data, title, onChangeData }: FilterOptionProps) {
  const allIsChecked = [ ...data.map(d => d.value) ].every(Boolean);
  const isIndeterminate = [ ...data.map(d => d.value) ].some(Boolean);

  function applyToObjects(e: ChangeEvent<HTMLInputElement>, value = undefined) {
    return [ ...data.map(d => {
      if(d.text === e.currentTarget.name || value !== undefined) {
        return { 
          ...d,
          value: value !== undefined? value:e.currentTarget.checked
        };
      };

      return d;
    }) ];
  };
  
  function handleOnChangeData(e: ChangeEvent<HTMLInputElement>, isSome: boolean) {
    if(isSome) {
      const newData = applyToObjects(e, e.currentTarget.checked);
      onChangeData(e.currentTarget.checked, newData);
    } else {
      const newData = applyToObjects(e);
      onChangeData(newData.map(d => d.value).some(Boolean), newData);
    };
  };

  return (
    <FilterAccordion header={
      <Checkbox
        isChecked={allIsChecked || isIndeterminate}
        isIndeterminate={!allIsChecked && isIndeterminate}
        onChange={(e) => handleOnChangeData(e, true)}
        color="primary.500"
        fontWeight="semibold"
        colorScheme="primary"
        name="some"
      >
        {title}
      </Checkbox>
    }>
      <Stack pl={6} mt={1} spacing={1}>
        {
          data.map((d, i) => {
            return (
              <Checkbox
                key={d.text}
                isChecked={d.value}
                onChange={(e) => handleOnChangeData(e, false)}
                color="primary.500"
                colorScheme="primary"
                fontWeight="semibold"
                name={d.text}
              >
                {d.title}{i === data.length - 1? ".":";"}
              </Checkbox>
            );
          })
        }
      </Stack>
    </FilterAccordion>
  );
};

export default FilterOption;