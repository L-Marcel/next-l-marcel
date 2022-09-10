export type ProgressFilterType = {
  min: number;
  max: number;
};

export type HaveFilterType = {
  _some: boolean;
  description: boolean;
  documentation: boolean;
  figma: boolean;
};

export type AsFilterType = {
  _some: boolean;
  common: boolean;
  highlight: boolean;
  fork: boolean;
  template: boolean;
};

export type IsFilterType = {
  _some: boolean;
  finished: boolean;
  deployed: boolean;
  licensed: boolean;
};

export type BadgesFilterType = {
  _some: boolean;
  [key: string]: boolean;
};

export type TechnologiesFilterType = {
  _some: boolean;
  [key: string]: boolean;
};

export type FilterType = {
  names: string[];
  progress: ProgressFilterType;
  have: HaveFilterType;
  as: AsFilterType;
  is: IsFilterType;
  badges: BadgesFilterType;
  technologies: TechnologiesFilterType;
}

export enum FilterAction {
  SET_NAMES = "SET_NAMES",
  TOGGLE_TECHNOLOGY = "TOGGLE_TECHNOLOGY"
}

export type FilterSetNamesActionPayload = string[];
export type FilterToggleTechnologyActionPayload = string;

export interface FilterReducerAction {
  type: FilterAction;
  payload?: FilterSetNamesActionPayload | FilterToggleTechnologyActionPayload;
}

export class Filter {
  static reducer(filter: FilterType, action: FilterReducerAction) {
    switch(action.type) {
    case FilterAction.SET_NAMES: {
      if(!action.payload) {
        return filter;
      }

      const newNames = action.payload as FilterSetNamesActionPayload;

      return {
        ...filter,
        names: newNames
      };
    }
    case FilterAction.TOGGLE_TECHNOLOGY: {
      if(!action.payload) {
        return filter;
      }

      const technology = action.payload as FilterToggleTechnologyActionPayload;

      return {
        ...filter,
        technologies: {
          ...filter.technologies,
          [technology]: !filter.technologies[technology]
        }
      };
    }
    default: 
      return filter;
    }
  }

  static setNames(names: string[]) {
    return {
      type: FilterAction.SET_NAMES,
      payload: names
    };
  }

  static toggleTechnology(technology: string) {
    return {
      type: FilterAction.TOGGLE_TECHNOLOGY,
      payload: technology
    };
  }
}