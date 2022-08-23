import { Combobox } from "@headlessui/react";
import { useState } from "react";

export type RepositoryNames = [string, string?];

export interface SearchRepositoryInputProps {
  repositoriesNames?: RepositoryNames[];
}

export function SearchRepositoryInput({
  repositoriesNames = []
}: SearchRepositoryInputProps) {
  const [selectedRepository, setSelectedRepository] = useState("");
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? repositoriesNames
      : repositoriesNames? repositoriesNames.filter((names) => {
        return names.some(name => name?.toLowerCase().includes(query.toLowerCase()));
      }):[];

  return (
    <Combobox value={query} onChange={setQuery}>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
      <Combobox.Options>
        {filteredPeople && filteredPeople.map((names) => (
          <Combobox.Option key={names[0]} value={names[0]}>
            {names.length > 1? names[1]:names[0]}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}