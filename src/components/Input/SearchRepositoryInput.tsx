import { Combobox } from "@headlessui/react";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useRouter } from "../../context/hooks/useRouter";
import { Icon } from "../Icon";
import { SearchInput, SearchInputIcon, SearchOption, SearchOptions } from "./styles";

export type Repository = {
  name: string;
  formattedName?: string;
  isPinned: boolean;
};

export interface SearchRepositoryInputProps {
  repositories?: Repository[];
}

export function SearchRepositoryInput({
  repositories = []
}: SearchRepositoryInputProps) {
  const { isNotPtBr } = useRouter();

  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? repositories
      : repositories? repositories.filter((repository) => {
        const includesTheName = repository.name.toLowerCase().includes(query.toLowerCase());
        const includesTheFormattedName = repository.formattedName?.toLowerCase().includes(query.toLowerCase());

        return includesTheName || includesTheFormattedName;
      }):[];

  function handleOnFocus() {
    setIsFocused(true);
  }

  function handleOnBlur() {
    setIsFocused(false);
  }

  function handleOnKeyUp(event: KeyboardEvent<HTMLInputElement>) {
    event.preventDefault();
  }

  function handleOnChangeQuery(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  return (
    <Combobox
      as="div"
      value={query} 
      onChange={setQuery}
      className="flex flex-col justify-start"
    >
      {({ open }) => (<>
        <Combobox.Button className="relative w-full">
          <SearchInputIcon 
            name="search"
            isFocused={open || isFocused}
            withoutTooltip
          />
          <Combobox.Input
            as={SearchInput}
            placeholder={isNotPtBr? "Search by name":"Pesquisar por nome"}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyUp={handleOnKeyUp} 
            onChange={handleOnChangeQuery}
          />
        </Combobox.Button>
        {((open || isFocused) && filteredPeople.length >= 1) && (<Combobox.Options as={SearchOptions} static>
          {filteredPeople && filteredPeople
            .sort((a, b) => Number(b.isPinned) - Number(a.isPinned))
            .map(({ name, formattedName, isPinned }) => (
              <Combobox.Option as={SearchOption} key={name} value={name}>
                {isPinned && <Icon 
                  name="flash" 
                  className="ml-[-3px] text-primary-500" 
                  withoutTooltip
                />}{formattedName ?? name}
              </Combobox.Option>
            ))}
        </Combobox.Options>)}
      </>)} 
    </Combobox>
  );
}