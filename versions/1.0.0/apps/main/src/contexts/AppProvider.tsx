import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { filterRepositories } from "../utils/filterRepositories";

interface AppProviderProps {
  children: ReactNode;
};

export const appContext = createContext({} as AppContext);

function AppProvider({ children }: AppProviderProps) {
  const [user, setUser] = useState<User>({
    about: "",
    avatar: "",
    certificates: [],
    fullname: "",
    name: "",
    personality: [],
    qtdRepos: 0,
    reposUrl: "",
    technologies: [],
    links: [],
    cv: "",
    username: ""
  });
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [filteredRepositories, setFilteredRepositories] = useState<Repository[]>([]);
  const [filterOptions, setFilterOptions] = useState<RepositoriesFilterOptions>({
    with: {
      some: false,
      description: false,
      license: false,
      figmaLink: false,
    },
    is: {
      some: false,
      fork: false,
      template: false,
    },
    minLevelOfExperienceWithTechnology: 0,
    technologies: [],
    query: "",
    pinnedsFirst: true
  });

  const _setUser = useCallback((user: User) => {
    setUser(user);
  }, [setUser]);
  
  const _setRepositories = useCallback((repositories: Repository[]) => {
    setRepositories(repositories);
  }, [setRepositories]);

  const _setFilterOptions = useCallback((options: RepositoriesFilterOptions) => {
    setFilterOptions(options);
  }, [setFilterOptions]);

  useEffect(() => {
    setFilterOptions(f => {
      return {
        ...f,
        technologies: user?.technologies.map(t => t.name.toLowerCase()) ?? []
      };
    });
  }, [user]);

  useEffect(() => {
    let repos = filterRepositories(repositories, filterOptions);
    setFilteredRepositories(repos);
  }, [repositories, filterOptions, user]);

  return (
    <appContext.Provider
      value={{
        filteredRepositories,
        repositories,
        setRepositories: _setRepositories,
        filterOptions,
        setFilterOptions: _setFilterOptions,
        user,
        setUser: _setUser
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export { AppProvider };