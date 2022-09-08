export type ProgressFilterType = {
  min: number;
  max: number;
};

export type HaveFilterType = {
  some: boolean;
  description: boolean;
  documentation: boolean;
  figma: boolean;
};

export type AsFilterType = {
  some: boolean;
  common: boolean;
  highlight: boolean;
  fork: boolean;
  template: boolean;
};

export type IsFilterType = {
  some: boolean;
  finished: boolean;
  deployed: boolean;
  licensed: boolean;
};

export type BadgesFilterType = {
  some: boolean;
  [key: string]: boolean;
};

export type TechnologiesFilterType = {
  some: boolean;
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
  SET_NAMES = "SET_NAMES"
}

export type FilterSetNamesActionPayload = string[];

export interface FilterReducerAction {
  type: FilterAction;
  payload?: FilterSetNamesActionPayload;
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
}