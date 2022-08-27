import { Combobox } from "@headlessui/react";
import { ChangeEvent, KeyboardEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "../../context/hooks/useRouter";
import { useSearchFilter } from "../../context/hooks/useSearchFilter";
import { Icon } from "../Icon";
import { SearchBox, SearchInput, SearchInputIcon, SearchOption, SearchOptions } from "./styles";

export type RepositoryBasicData = {
  name: string;
  formattedName?: string;
  isPinned: boolean;
};

export interface SearchRepositoryInputProps {
  repositories?: RepositoryBasicData[];
}

export function SearchRepositoryInput({
  repositories = []
}: SearchRepositoryInputProps) {
  const { setFilter } = useSearchFilter();
  const { isNotPtBr } = useRouter();

  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");

  const filteredRepositories = useMemo(() => {
    return query === ""
      ? repositories
      : repositories? repositories.filter((repository) => {
        const includesTheName = repository.name.toLowerCase().includes(query.toLowerCase());
        const includesTheFormattedName = repository.formattedName?.toLowerCase().includes(query.toLowerCase());

        return includesTheName || includesTheFormattedName;
      }):[];
  }, [query, repositories]);

  useEffect(() => {
    setFilter({
      names: filteredRepositories.map(repository => repository.name)
    });
  }, [filteredRepositories, setFilter]);

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
      as={SearchBox}
      value={query} 
      onChange={setQuery}
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
        {((open || isFocused) && filteredRepositories.length >= 1) && (<Combobox.Options as={SearchOptions} static>
          {filteredRepositories && filteredRepositories
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