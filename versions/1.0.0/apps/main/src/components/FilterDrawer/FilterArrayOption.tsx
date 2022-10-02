import { Checkbox, Stack } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import FilterAccordion from "./FilterAccordion";

interface FilterOptionProps {
  title: string;
  arr: string[];
  compareTo: string[];
  onChangeArray: (arr: string[]) => void;
};

function FilterArrayOption({ arr, compareTo, title, onChangeArray }: FilterOptionProps) {
  const arrayInLowerCase = arr.map(a => a.toLowerCase());
  const compareToInLowerCase = compareTo.map(v => v.toLowerCase());
  const allIsChecked = [ ...compareToInLowerCase.map(d => arrayInLowerCase.includes(d)) ].every(Boolean);
  const isIndeterminate = [ ...compareToInLowerCase.map(d => arrayInLowerCase.includes(d)) ].some(Boolean);

  function handleOnChangeEveryInArray(e: ChangeEvent<HTMLInputElement>) {
    if(e.currentTarget.checked){
      onChangeArray(compareToInLowerCase);
    } else {
      onChangeArray([]);
    };
  };

  function handleOnChangeArray(e: ChangeEvent<HTMLInputElement>) {
    let newArr = [ ...arrayInLowerCase ];
    const index = newArr.indexOf(e.currentTarget.name);
    
    if(index === -1){
      newArr.push(e.currentTarget.name);
    } else {
      newArr = newArr.filter(v => v !== e.currentTarget.name);
    };

    onChangeArray(newArr);
  };

  return (
    <FilterAccordion header={
      <Checkbox
        isChecked={allIsChecked || isIndeterminate}
        isIndeterminate={!allIsChecked && isIndeterminate}
        onChange={handleOnChangeEveryInArray}
        color="primary.500"
        colorScheme="primary"
        fontWeight="semibold"
      >
        {title}
      </Checkbox>
    }>
      <Stack pl={6} mt={1} spacing={1}>
        {
          compareTo.map((d, i) => {
            const value = d.toLowerCase();
            return (
              <Checkbox
                key={value}
                isChecked={arrayInLowerCase.includes(value)}
                onChange={handleOnChangeArray}
                color="primary.500"
                colorScheme="primary"
                fontWeight="semibold"
                name={value}
              >
                {d}{i === compareTo.length - 1? ".":";"}
              </Checkbox>
            );
          })
        }
      </Stack>
    </FilterAccordion>
  );
};

export default FilterArrayOption;