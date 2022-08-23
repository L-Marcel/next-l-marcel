import { Combobox } from "@headlessui/react";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useRouter } from "../../context/hooks/useRouter";
import { SearchInput } from "./styles";

export type RepositoryNames = [string, string?];

export interface SearchRepositoryInputProps {
  repositoriesNames?: RepositoryNames[];
}

export function SearchRepositoryInput({
  repositoriesNames = []
}: SearchRepositoryInputProps) {
  const { isNotPtBr } = useRouter();

  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? repositoriesNames
      : repositoriesNames? repositoriesNames.filter((names) => {
        return names.some(name => name?.toLowerCase().includes(query.toLowerCase()));
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
    console.log(event);
    setQuery(event.target.value);
  }

  return (
    <Combobox value={query} onChange={setQuery}>
      {({ open }) => (<>
        <Combobox.Button>
          <Combobox.Input
            as={SearchInput}
            placeholder={isNotPtBr? "Search by name":"Pesquisar por nome"}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyUp={handleOnKeyUp} 
            onChange={handleOnChangeQuery}
          />
        </Combobox.Button>
        {(open || isFocused) && (<Combobox.Options static>
          {filteredPeople && filteredPeople.map((names) => (
            <Combobox.Option key={names[0]} value={names[0]}>
              {names.length > 1? names[1]:names[0]}
            </Combobox.Option>
          ))}
        </Combobox.Options>)}
      </>)} 
    </Combobox>
  );
}